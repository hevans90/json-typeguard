# json-typeguard
An experimental tool to strongly type guard JSON objects against a TypeScript interface.

## Running the CLI
Clone this repo, navigate to `dist/src` and run `node index`, you should see the following output:

![Alt text](docs/cli-output.png?raw=true "CLI Output")

Currently the functionalty is all hard-coded and no parameters can be passed in, stay tuned!

## Rebuilding the CLI
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) **The CLI compilation is currently unstable, and needs looking at.** ![#f03c15](https://placehold.it/15/f03c15/000000?text=+)

To compile the CLI, navigate to `src` and `node compileMain`.

### Explanation
This CLI uses a modified version of the TypeScript compiler, with this [custom transformer](https://github.com/kimamula/ts-transformer-keys) bolted on.
To call our custom compiler, we must write a wrapper function which can be [found here in this repository](src/compile.ts)
