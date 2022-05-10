import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBvZVI6D5QN0BukGrcempIVkb53HfQjBmY",
    authDomain: "twitter-build-bbf8b.firebaseapp.com",
    projectId: "twitter-build-bbf8b",
    storageBucket: "twitter-build-bbf8b.appspot.com",
    messagingSenderId: "256157936401",
    appId: "1:256157936401:web:39579eebf7c36a8d913ab0"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };