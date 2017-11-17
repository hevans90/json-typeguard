"use strict";
const ts = require("typescript");
const transformer_1 = require("ts-transformer-keys/transformer");
function compile(filePaths, writeFileCallback) {
    const program = ts.createProgram(filePaths, {
        strict: true,
        noEmitOnError: true,
        target: ts.ScriptTarget.ES5
    });
    const transformers = {
        before: [transformer_1.default(program)],
        after: []
    };
    const { emitSkipped, diagnostics } = program.emit(undefined, writeFileCallback, undefined, false, transformers);
    if (emitSkipped) {
        throw new Error(diagnostics.map(diagnostic => diagnostic.messageText).join('\n'));
    }
}
exports.compile = compile;
//# sourceMappingURL=compile.js.map