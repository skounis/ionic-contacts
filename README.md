# Ionic Contacts
Play with Ionic, Unit Tests and Electron.

A client front-end app for:
- https://github.com/skounis/nodejs-rest-contacts

Test the [LIVE DEMO](https://skounis.github.io/ionic-contacts/www/) or download the [Electron](https://github.com/skounis/ionic-contacts/releases/tag/v0.0.1) version of the app (currently available for MacOS)

### Prerequisites / Before we start
#### Backend
This applications needs a RESTful backend API to communication with. You have the following option
1. Use the service deployed on Heroku:
    - https://rest-contacts.herokuapp.com/
2. Install the [nodejs-rest-contacts](https://github.com/skounis/nodejs-rest-contacts) project and run it on your local box

Note: If you choose to go with the local installation you should set the `MASTER_KEY` and `JWT_SECRET` in `.env` file.

#### Dependencies
Go into the project folder and run `npm install`

#### API
Edit `src/config.ts` and set the base URL for the API and the `MASTER_TOKEN`.
A test backend is deployed on Heroku:

- https://rest-contacts.herokuapp.com/

If you use the deployed service on Heroku the `MASTER_TOKEN` is already in place. 

If you run the [nodejs-rest-contacts](https://github.com/skounis/nodejs-rest-contacts) backend on your box, check the IP address and the port the Express server is listening for connections. (it should be 0.0.0.0:9000 or {your-local-ip}:9000)

### Development
Run `ionic serve` and test the application in your browser. 

### Tests
Run `npm run test` and have all the unit tests executed. Currently the `app.component.ts` and `data.service.ts` are covered. 

### Electron
Run `npm run dev` and start the Electron app in development with all auto reload and everything as if you were developing ionic application in browser.

Note: You may need to reload the app the first time `(ctrl + R)`

### Build Electron
Run `npm run ebuild`. This will create all the Electron redistributable files. 
Then check the `./dist` folder for the generated binaries.

## References
- [Using Angular 2's Model-Driven Forms with FormGroup and FormControl](https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol)
- [How to Build Nested Model-driven Forms in Angular 2](https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2)
- [Let’s Make Desktop Application With Ionic 3 and Electron](https://medium.com/@LohaniDamodar/lets-make-desktop-application-with-ionic-3-and-electron-44316f82901d)
### Bonus
Avatars are not part of the model. They are generated on the fly by utilizing the online service of [Pravatar](http://pravatar.cc/) (eg: http://i.pravatar.cc/64?u=5b3f70010fcdd40014155032) 
## Troubleshooting
If running the tests fail try to install a latest version of webpack `npm i webpack`.
