# README

[![](https://img.shields.io/badge/typescript-lang-blue.svg)](https://www.typescriptlang.org/) [![](https://img.shields.io/badge/serverless-3.0.0-red.svg)](https://www.serverless.com/) [![](https://img.shields.io/badge/aws_sdk-2.1.0-gold.svg)](https://github.com/aws/aws-sdk-js) 

A few examples to better understand:

1. `serverless` framework (specifically how to invoke functions locally).
1. Invoke `aws lambda` functions with `serverless` locally.
1. Some basic `typescript`.
1. Invoking `serverless` transpiled from `typescript`.

## AWS

A couple examples using [serverless](https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/) framework with `aws-sdk` and typescript (to get more practice with the combination of these).

> If `aws-sdk` is included in handler you may need to use `aws_config.json` or programmatic configuration (even though `serverless` emulates IAM credentials). I tested several scenarios and most required using both some configuration (file/programmatic) and valid credentials.

> **Note:** credentials included in here are dummy/fake.

## Use

```bash
# Free-standing plain ole JS
cd handlers
serverless invoke local -f aws
serverless invoke local -f aws -p ../events/event.json

serverless invoke local -f example
serverless invoke local -f example -p ../events/event.json

node unit_test.js
```

```bash
# Invoke transpiled functions
# From root dir 
serverless invoke local -f aws
serverless invoke local -f aws -p events/event.json

# Doesn't use aws-sdk
serverless invoke local -f example
serverless invoke local -f example -p events/event.json
```

```bash
# Execute transpiled scripts
node ./built/types/example.type.js
node ./built/interfaces/example.interface.js
```

## Bash

Transpile `typescript` files:

```bash
nvm use 16.9
npm i
npm run build
```

Execute `serverless` functions locally:

```bash
npm i serverless -g

# Generic invocation example
serverless invoke local -f example
# Generic invocation with event
serverless invoke local -f example -p event.json
```

## Super Helpful

1. https://gist.github.com/rstacruz/648cb4dc68a76c761dc9e989832d9a50