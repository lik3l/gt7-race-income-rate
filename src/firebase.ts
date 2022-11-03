import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyBId0WJUa6OyvG5uZS_8pAxABgFT8c4h74',
  authDomain: 'gt7-income-rate.firebaseapp.com',
  projectId: 'gt7-income-rate',
  storageBucket: 'gt7-income-rate.appspot.com',
  messagingSenderId: '626796922202',
  appId: '1:626796922202:web:676a7978f8c10022af9f63'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
