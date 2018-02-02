"use strict";
var ts = require("typescript");
var transformer_1 = require("ts-transformer-keys/transformer");
function compile(filePaths, writeFileCallback) {
    var program = ts.createProgram(filePaths, {
        strict: true,
        noEmitOnError: true,
        target: ts.ScriptTarget.ES2017
    });
    var transformers = {
        before: [transformer_1["default"](program)],
        after: []
    };
    var _a = program.emit(undefined, writeFileCallback, undefined, false, transformers), emitSkipped = _a.emitSkipped, diagnostics = _a.diagnostics;
    if (emitSkipped) {
        throw new Error(diagnostics.map(function (diagnostic) { return diagnostic.messageText; }).join('\n'));
    }
}
exports.compile = compile;
