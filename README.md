# KisanWebapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## How to creat components in modules 

Route to specific module directory path 
Ex: 
cd .\src\app\modules\dashboard\components\
cd .\src\app\shared\components\
ng g c compoentName

Make sure component is imported in its own module in declartions[]

## How to access/route the compoent at app-level (Lazy loading)
Since modules are already routed in app routing module at parent(module) level. 
all the other components in each module will be child routes of that individual module (Ex: home)
Ex:
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'overview', <-------------   // child route path
        component: OverviewComponent <-----// child route component that the router renders
      }
  }
]







