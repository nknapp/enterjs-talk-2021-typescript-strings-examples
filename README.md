# TypeScript kann auch Strings - EnterJS 2021

This repository contains the code-examples of my talk at the EnterJS 2021.
To try it out, clone the repo, run `yarn install` and open it in and IDE of your choice.

You can also run `yarn start` to start a webpack-dev-server. This is a create-react-app after all.

# Why TypeScript?

Why do I favor TypeScript over JavaScript? 

* [no-types-js](./src/01-why-typescript/no-types.js) shows you nothing about
  the data that is expected. You have to look for it.
* [with-types.ts](./src/01-why-typescript/with-types.ts) contains all the information about the "book".
  Like doc-comments, but checked by the compiler. And you get auto-completion and compile-time feedback.
  
# Example files

The example files are roughly in the same order as they appear in the presentation.
There are some additional examples in here, so don't be confused.

# Further reading

* [OpenAPI Client Axios](https://github.com/anttiviljami/openapi-client-axios) is an http-client based on
  axios that can generate types from an openapi-spec.
* [SQL Validator in TypeScript](https://github.com/codemix/ts-sql)
* [How react-i18next realizes configurable types](https://github.com/i18next/react-i18next/blob/master/ts4.1/index.d.ts#L49-L60)
