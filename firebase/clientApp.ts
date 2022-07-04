import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const clientCredentials = {
  apiKey: "AIzaSyBoE03m0spx1HNzdp4wDQxTlBYi5qiQGX4",
  authDomain: "stock-visualizer-2d234.firebaseapp.com",
  projectId: "stock-visualizer-2d234",
  storageBucket: "stock-visualizer-2d234.appspot.com",
  messagingSenderId: "556918573720",
  appId: "1:556918573720:web:6bffdd8764daf6e4e29eed",
  measurementId: "G-34JCD6FMYH"
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;