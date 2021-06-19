# fronts-example

A simple example for Fronts

## Installation

```sh
yarn install
```

## Development

```sh
yarn start
```

Runs the apps in the development mode, and open [http://localhost:3001](http://localhost:3001) to view App1, and open [http://localhost:3002](http://localhost:3002) to view App2 in the browser.

```sh
cd packages/app1 && SPA=true yarn start
```

Runs the app1 in non-micro-frontends mode.

## Build

```sh
yarn build
```

Build the projects, and build files are stored in the `dist/` directory. Use the `--mode=production` flag for a production build.

## Serve

```sh
yarn serve
```

Serve the projects with the `dist/` directory source, and open [http://localhost:3001](http://localhost:3001) to view App1, and open [http://localhost:3002](http://localhost:3002) to view App2 in the browser.
