## shaojiang.io

A front-end code of [https://shaojiang.io](https://shaojiang.io).

### Features and techniques

 - Redux
 - fontawesome icons
 - form submission/validation: `redux-form`
 - Router: `react-router`
 - CSS module + Less
 - `Webpack`: Build/Run project on different environments: `local`, `dev` and `prod`.

## Development

### Prerequisites

Ensure you have installed `nodejs`, `yarn` on your machine. 
  
  ```bash
  $ yarn install
  ```

### Running

You can run in different environments, including `local` (default), `dev`, `prod`. These commands will start a webpack server to serve different environments. 

  ```bash
  $ yarn run start:local
  $ yarn run start:dev
  $ yarn run start:prod
  ```
  
Then visit http://localhost:3000.

By default, `yarn start` will run `yarn run start:local`.

There are some differences when running them on the 3 envs:

 1. Webpack will load corresponding configuration file `src/config/config.[env].json`.
 2. For `local` and `dev`, the css/js/assets are not compressed/uglified. `redux-logger` is enabled for debugging purpose. Hot Module replacement is enabled.
 3. For `prod`, css/js/assets are compressed/uglified. No logging info. No Hot Module Replacement.

If you do not want to start a server, just build:

  ```bash
  $ yarn run build:local
  $ yarn run build:dev
  $ yarn run build:prod 
  ```
    
The output folder is `/build`.

### Production

To deploy to the production server, this section has some additional information for you. Run:

  ```bash
  $ yarn run build     # or yarn run build:prod
  ```
    
It will bundle the code including:

 - Prepare `index.html` and static asset files.
 - Extract all css styles, combine, compress them into a `styles.[hash].css`.
 - Compile TypeScript/ES6 into ES5 file. 
 - Extract, minify and uglify vendor JS code into `vendor.[hash].js`. The app JS code is output as `main.[hash].js`. 

After that the code can be served directly from nginx.

Alternatively, we can run the production build through Docker. Run:

  ```bash
  $ cd [your project root]
  $ docker build -t joycoding/shaojiang.io .
  $ docker run -it -p 3001:3000 --name shaojiang.io joycoding/shaojiang.io
  ```

Then visit **http://localhost:3001**.

### Deployment (Amazon S3)

`cd ~/Projects/shaojiang.io/shaojiang.io && yarn build`

`find build -type f -exec gzip -9 {} \; -exec mv {}.gz {} \;`

`cd build && s3cmd put --add-header='Content-Encoding: gzip' -m "text/css" *.css s3://shaojiang.io/ && s3cmd put --add-header='Content-Encoding: gzip' -m "application/javascript" *.js s3://shaojiang.io/ && s3cmd put -P index.html s3://shaojiang.io/ && s3cmd put --recursive public/* s3://shaojiang.io/public/`

## Test

Run this command to run test cases written in Jest and Enzyme:

  ```bash
  $ yarn test
  ```

## Understanding the structure

All the source code is located at **/src** and it is using ES6-7 features.

The project is organized as followed:

    |- client
      |- build    # build destination
      |- configs  # docker/nginx configurations
      |- jest     # Jest folder for tests
      |- public   # static public assets, including images, videos, etc
      |- src
        |- components    # React components for pages
        |- constants     # constants in JSON file
        |- elements      # common controls like `Button`.
        |- i18n          # i18n
        |- models        # TypeScript models, like `User`
        |- partials      # reusable page partials to share among pages
        |- reducers      # Redux reducers
        |- scripts       # scripts for docker, nginx, etc.
        |- store         # Redux store
        |- styles        # common css rules in LESS
        |- utils         # utilities like api, string, validator, etc
      |- webpack  # Webpack configurations

