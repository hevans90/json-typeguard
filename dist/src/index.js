"use strict";
let colors = require('colors');
const fs = require("fs");
const ts_transformer_keys_1 = require("ts-transformer-keys");
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
fs.readFile(mockDefinitions[0].path, (err, data) => {
    runTypeGuardAgainstMock(err, data, mockDefinitions[0].mockName, mockDefinitions[0].inferenceTypes);
});
fs.readFile(mockDefinitions[1].path, (err, data) => {
    runTypeGuardAgainstMock(err, data, mockDefinitions[1].mockName, mockDefinitions[1].inferenceTypes);
});
fs.readFile(mockDefinitions[2].path, (err, data) => {
    runTypeGuardAgainstMock(err, data, mockDefinitions[2].mockName, mockDefinitions[2].inferenceTypes);
});
fs.readFile(mockDefinitions[3].path, (err, data) => {
    runTypeGuardAgainstMock(err, data, mockDefinitions[3].mockName, mockDefinitions[3].inferenceTypes);
});
function runTypeGuardAgainstMock(err, data, mockName, inferenceTypes) {
    let response = JSON.parse(data);
    const total = response.results.length;
    let statusTotals;
    let successes = 0;
    let failures = 0;
    let failuresMsg;
    if (err) {
        return console.log(err);
    }
    response.results.forEach(r => {
        if (SearchResultTypeGuard.isType(r, inferenceTypes)) {
            successes++;
        }
        else {
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
    static isType(searchResult, inferenceTypes) {
        return inferenceTypes.includes(searchResult.object_type);
    }
    static isDiningSearchResult(searchResult) {
        let interfaceKeys = ts_transformer_keys_1.keys();
        let successes, failures = 0;
        interfaceKeys.forEach((k) => searchResult[k] ? successes++ : failures++);
        return failures === 0;
    }
}
//# sourceMappingURL=index.js.map