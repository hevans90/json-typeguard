import * as ts from 'typescript';
import transformer from 'ts-transformer-keys/transformer';

export function compile(filePaths: string[], writeFileCallback?: ts.WriteFileCallback): void {
    const program = ts.createProgram(filePaths, {
        strict: true,
        noEmitOnError: true,
        target: ts.ScriptTarget.ES2017
    });
    const transformers: ts.CustomTransformers = {
        before: [transformer(program)],
        after: []
    };
    const { emitSkipped, diagnostics } = program.emit(undefined, writeFileCallback, undefined, false, transformers);

    if (emitSkipped) {
        throw new Error(diagnostics.map(diagnostic => diagnostic.messageText).join('\n'));
    }
}
