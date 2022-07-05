import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoE03m0spx1HNzdp4wDQxTlBYi5qiQGX4",
  authDomain: "stock-visualizer-2d234.firebaseapp.com",
  projectId: "stock-visualizer-2d234",
  storageBucket: "stock-visualizer-2d234.appspot.com",
  messagingSenderId: "556918573720",
  appId: "1:556918573720:web:6bffdd8764daf6e4e29eed",
  measurementId: "G-34JCD6FMYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();