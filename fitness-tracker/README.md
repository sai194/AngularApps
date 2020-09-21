# FitnessTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

ng new fitness-tracker

npm install --save @angular/material @angular/cdk

styles.css @import '~@angular/material/prebuilt-themes/indigo-pink.css';

npm install --save hammerjs

main.ts import 'hammejs'

index.html <link href=”https://fonts.googleapis.com/icon?family=Material+Icons” rel=”stylesheet”>
if index.html doesn't work then add import to
styles.css @import 'https://fonts.googleapis.com/icon?family=Material+Icons';

ng g c auth/signup --module app.module
ng g c auth/login --module app.module
ng g c training --module app.module
ng g c training/new--training --module app.module
ng g c training/past-trainings --module app.module
ng g c training/current-training --module app.module
ng g c welcome --module app.module

https://github.com/angular/flex-layout

npm i -s @angular/flex-layout --if not working then use npm install @angular/flex-layout@9.0.0-beta.31

npm install --save rxjs-compat


https://github.com/IdanCo/angularfire2
npm install firebase angularfire2 --save


