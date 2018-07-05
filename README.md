# Ionic Contacts
Play with Ionic, Unit Tests and Electron.

A client front-end app for:
- https://github.com/skounis/nodejs-rest-contacts

### Prerequisites / Before we start
#### Dependencies
Install: `npm install`

#### API
Edit `src/config.ts` and set the base URL for the API.
A test backend is deployed on Heroku:

- https://rest-contacts.herokuapp.com/

### Development
Testing the app in a browser: `ionic serve`

### Tests
Run the tests: `npm run test`

### Electron
Run in development with all auto reload and everything as if you were developing ionic application in browser: `npm run dev`

Note: You may need to reload the app the first time `(ctrl + R)`

### Build Electron
Run `npm run ebuild`.
Then check the `./dist` folder for generated binaries.

## References
- [Using Angular 2's Model-Driven Forms with FormGroup and FormControl](https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol)
- [How to Build Nested Model-driven Forms in Angular 2](https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2)
- [Let’s Make Desktop Application With Ionic 3 and Electron](https://medium.com/@LohaniDamodar/lets-make-desktop-application-with-ionic-3-and-electron-44316f82901d)

## Troubleshooting
If running the tests fail try to install a latest version of webpack `npm i webpack`.
