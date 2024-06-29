# MeCvWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deploy to Firebase Hosting

    1. Create your Firebase App from [Firebase Console](https://console.firebase.google.com)
    2. Install Firebase Tools globally using the next command: npm install -g firebase-tools
    3. Login into Firebase using the next command: firebase login
    4. Run the next command and follow steps selecting Firebase Hosting service and your Firebase App created: firebase init
    5. Check that the property angular.json > projects > Your Project Name > architect > build > options > outputPath and the property firebase.json > hosting > public have the same values.
    6. Run command: ng build --configuration production
    7. Run command: firebase deploy
