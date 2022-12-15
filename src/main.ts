import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

if (environment.production) {
  enableProdMode();
}

const firebaseApp = initializeApp(environment.firebase);

let appInit = false

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
  if(!appInit) {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }

  appInit = true
})

// firebase.auth().onAuthStateChanged(() => {
//   if(!appInit) {
//     platformBrowserDynamic().bootstrapModule(AppModule)
//       .catch(err => console.error(err));
//   }

//   appInit = true
// })
