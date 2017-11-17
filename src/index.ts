"use strict";
let colors = require('colors');
import * as fs from 'fs';
import * as searchResultTypes from '../search/search-results/_index';
import { keys } from 'ts-transformer-keys';
import { PaginatedApiResponse } from './../search/paginated-api-response';

const mockDefinitions = [
    {
        mockName: 'DINING',
        path: '../search/mocks/dining_autocomplete_MOCK.json',
        inferenceTypes: [
            'restaurant',
            'celebrity_chef',
            'hot_table'
        ]
    },
    {
        mockName: 'ENTERTAINMENT',
        path: '../search/mocks/entertainment_autocomplete_MOCK.json',
        inferenceTypes: [
            'event'
        ]
    },
    {
        mockName: 'MEMBER-BENEFIT',
        path: '../search/mocks/member-benefit_autocomplete_MOCK.json',
        inferenceTypes: [
            'member_benefit',
            'member_benefit_category',
            'brand'
        ]
    },
    {
        mockName: 'MEMBER-EVENT',
        path: '../search/mocks/member-event_autocomplete_MOCK.json',
        inferenceTypes: [
            'member_event',
            'brand',
            'member_event_category'
        ]
    }
];


fs.readFile(mockDefinitions[0].path, (err, data: any) => {
    runTypeGuardAgainstMock<searchResultTypes.DiningSearchResult>(err, data, mockDefinitions[0].mockName, mockDefinitions[0].inferenceTypes);
});

fs.readFile(mockDefinitions[1].path, (err, data: any) => {
    runTypeGuardAgainstMock<searchResultTypes.EntertainmentSearchResult>(err, data, mockDefinitions[1].mockName, mockDefinitions[1].inferenceTypes);
});

fs.readFile(mockDefinitions[2].path, (err, data: any) => {
    runTypeGuardAgainstMock<searchResultTypes.MemberBenefitSearchResult>(err, data, mockDefinitions[2].mockName, mockDefinitions[2].inferenceTypes);
});

fs.readFile(mockDefinitions[3].path, (err, data: any) => {
    runTypeGuardAgainstMock<searchResultTypes.MemberEventSearchResult>(err, data, mockDefinitions[3].mockName, mockDefinitions[3].inferenceTypes);
});

function runTypeGuardAgainstMock
    <T extends searchResultTypes.SearchResult>
    (err, data: any, mockName: string, inferenceTypes: string[]) {

    let response = JSON.parse(data) as PaginatedApiResponse<T>;
    const total = response.results.length;
    let statusTotals: string;
    let successes = 0;
    let failures = 0;
    let failuresMsg: string;

    if (err) {
        return console.log(err);
    }

    response.results.forEach(r => {
        if (SearchResultTypeGuard.isType<T>(r, inferenceTypes)) {
            successes++;
        } else {
            failures++;
        }
    });

    statusTotals = successes === total ?
        colors.green(`${successes}/${total}`) :
        colors.red(`${successes}/${total}`);

    failuresMsg = failures > 0 ? `(${colors.red(failures + ' failures')})` : '';

    console.log(`\nAnalysing ${colors.yellow(mockName)} mock: ${total} results`);
    console.log(`Executed ${statusTotals} tests successfully ${failuresMsg}\n`);
}

class SearchResultTypeGuard {

    static isType
        <T extends searchResultTypes.SearchResult>
        (searchResult, inferenceTypes: string[]): searchResult is T {
        return inferenceTypes.includes((<T>searchResult).object_type);
    }

    static isDiningSearchResult(searchResult): searchResult is searchResultTypes.DiningSearchResult {
        
        let interfaceKeys = keys<searchResultTypes.DiningSearchResult>();
        let successes, failures = 0;
        interfaceKeys.forEach((k) => searchResult[k] ? successes++ : failures++);
        return failures === 0;
    }
}
