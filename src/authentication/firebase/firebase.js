import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt0E3dOD6IAvbPw0-b-9qT4vt5qonU_94",
  authDomain: "qr-codes-dev.firebaseapp.com",
  projectId: "qr-codes-dev",
  storageBucket: "qr-codes-dev.appspot.com",
  messagingSenderId: "968930117391",
  appId: "1:968930117391:web:3e8de66899dbf298bda07a"
};

export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://www.qr-codes-dev.firebaseapp.com',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);