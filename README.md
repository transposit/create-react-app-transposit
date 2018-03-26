# `react-scripts-transposit-typescript`

Create React apps with Transposit and Typescript with no build configuration.

 * [Getting Started](#tldr) – How to create a new app.
 * [User Guide](https://github.com/wmonk/create-react-app-typescript/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with react scripts ts.

Bootstrap a typescript react app with login for Transposit (using the [Transposit SDK](https://www.npmjs.com/package/transposit)) setup out of the box.

## tl;dr

```sh
npm install -g create-react-app

create-react-app my-app --scripts-version=@transposit/react-scripts-typescript --service="myOrg/testService" --transposit-url="https://api.transposit.com"
cd my-app/
npm start
```
You can use `yarn` instead of `npm` if you prefer.

## details

If you're already familiar with create-react-app, this should be familiar to you with the exception of the `--service` and `--transposit-url` CLI args. Start by creating and deploying a service on Transposit, and use the services maintainer, name, and transposit base url in these CLI args, which are needed to initialize the Transposit SDK.

Your application will contain a simple login page (`/login`), route to handle the redirect after a successful login (`/handle-login`), and a route for your app's content (`/`). You may need to go back to Transposit and edit the "Successful Login URI" in the deploy configuration to use the `/handle-login` path.
