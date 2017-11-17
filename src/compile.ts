import * as ts from 'typescript';
import * as path from 'path';
import transformer from 'ts-transformer-keys/transformer';

export function compile(filePaths: string[], writeFileCallback?: ts.WriteFileCallback): void {
  const program = ts.createProgram(filePaths, {
    strict: true,
    noEmitOnError: true,
    target: ts.ScriptTarget.ES5
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

compile(['./index.js'], (fileName, data) => console.log(`FileName: ${fileName} \nData: ${data}`));
