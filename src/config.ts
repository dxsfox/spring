import ReactNativeAsvncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDzn8O-hWhua068dDZ6WQVgn1lafet0uDM",
    authDomain: "spring-dream-813ee.firebaseapp.com",
    projectId: "spring-dream-813ee",
    storageBucket: "spring-dream-813ee.firebasestorage.app",
    messagingSenderId: "845045875520",
    appId: "1:845045875520:web:e91f1bc4845017aa4eb0a5",
    measurementId: "G-PD398Z6MN0"
  };

  const app = initializeApp(firebaseConfig)
  const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsvncStorage)
  })
  const db = getFirestore(app)
  export { app, auth, db };
