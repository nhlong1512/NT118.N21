import {
  AUTH_DOMAIN,
  API_KEY,
  MESSAGING_SENDER_ID,
  STORAGE_BUCKET,
  PROJECT_ID,
  APP_ID,
} from "./config";
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
