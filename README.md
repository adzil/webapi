TypeScript Project Boilerplate
===============================

This is a TypeScript project boilerplate with complete test suite, continuous
integration, and coverage for Node.JS.

## Features

- Full-fledged TypeScript project with dev hot reloading support
- Suitable for standalone or package projects
- Interoperability with CommonJS modules
- Instant debug configuration with VSCode
- Complete test suite with Mocha and Chai with Promise
- Code coverage embedded in `npm test`
- Travis-CI and Coveralls support

## Getting Started

To download project boilerplate, use `git` command to clone this repository
into your destination project folder.

```sh
# Create new directory
~$ mkdir myProject

# Clone this repository to myProject folder
~$ git clone https://github.com/adzil/tsplus myProject
Cloning into 'myProject'...
```

Then, `cd` to the project directory and remove the `.git` folder so you can
initialize your own git repository.

```sh
# Enter project folder
~$ cd myProject

# Remove this repository information
~/myProject$ rm -Rf .git 

# Create new git repository
~/myProject$ git init

# Initialize node modules
~/myProject$ npm install
```

Don't forget to change `package.json` information to match your project info
and fine tune the `tsconfig.json` to match your TypeScript compilation needs.

## Running on production

If you are plan on running the application on production, please set
`typescript` package to your dependencies so it can compile the source code
after `npm install` on production machine.

```sh
# Don't forget the --save option
npm install --save typescript
```

And to deploy the code on your production machine

```sh
# Pull it from git repo or anything
git pull

# Do npm install on production
npm install --only=prod

# Compile the code
npm run build

# Run the code
npm start

# Or using process manager, it is up to you
npm install -g pm2
pm2 start npm -- start
```

Don't add `typescript` dependencies if you plan to upload this project to
NpmJS.com. The `npm publish` will automatically compile your project before
publishing it.

## Basic Build and Run

You can also run standalone app by building the project first.

```sh
# Build the project
npm run build

# And then let's run the project
npm start
```

> The syntax has been changed from `npm run compile`.

### Run Without Building

If you want to run the project with in-memory compiler, use

```
npm run app
```

> The syntax has been changed from `npm run project`.

## Development Hot Reload

You can instantly reload your project after saving file by simply running

```
npm run dev
```

This command will do in-memory compilation so if you planning on run the app
with `npm start` later, please build it first using `npm run build`.

Please **DO NOT** use this command for production. You can use process manager
such as PM2 to manage your production code.

If you running REPL or using stdin on your project, turn off nodemon stdin
by adding `nodemon.json` in the root project directory with this configuration

```json
{
  "restartable": false
}
```

## Debugging with VSCode

You can run the debugger by selecting `Launch Program` at Debug Panel and click
the start button. VSCode will automatically compile and debug your program.

## CommonJS Default Exports

The default export of TypeScript will end up with `.default` property inside
the exported module. If this is not the behavior you want (e.g. project
that will require'd by plain CommonJS file), you can change `main` and
`typings` property of `package.json` to

```json
{
  "main": "cjs/index.js",
  "typings": "cjs/index.d.ts"
}
```

So instead requiring module by

```javascript
const myModule = require('myModule').default
```

You can just require it by

```javascript
const myModule = require('myModule')
```

Please note that the CJS Interop module only works with functions or classes.
If you do default exports with other object than function, it will only export
the default object (the other module property will be omitted).

## Publishing TypeScript Packages

TypeScript packages will automatically compiled before you publish them with

```
npm publish
```

## Test and Code Coverage

You can write test code in `test/` folder and create new test file with
`.spec.ts` extension (the .spec is important). Example test file is included
in `test/index.spec.ts` and can be removed later.

Test and code coverage can be initiated by using

```
npm test
```

The coverage report is written in HTML and can be located in `coverage/`
folder.

## Travis-CI and Coveralls

The `.travis.yml` contains default configuration to run proper test on Travis
and automatically send coverage report to Coveralls. If you don't want the
coveralls integration, please delete `after_success` configuration in
`.travis.yml` ~~or your build will failing~~. Your build will not failing but
it will do if the `after_success` process timeouts. So it is better to remove
them, just in case.
