import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDDlUO7QUY7Crqtf_Sx-b5DNbKsEPhHwME",
    authDomain: "qr-attendance-system-56e54.firebaseapp.com",
    databaseURL: "https://qr-attendance-system-56e54-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qr-attendance-system-56e54",
    storageBucket: "qr-attendance-system-56e54.appspot.com",
    messagingSenderId: "814589980331",
    appId: "1:814589980331:web:a5906768175a3f466351ee",
    measurementId: "G-K64ED1X1TY"

  },  
 // apiUrl: 'http://localhost:3000/api',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
