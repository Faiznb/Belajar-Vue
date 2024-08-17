import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBW4921E2UzbeDU_wha9tIVd0PPS0-T4sA',
  authDomain: 'music-b52db.firebaseapp.com',
  projectId: 'music-b52db',
  storageBucket: 'music-b52db.appspot.com',
  messagingSenderId: '71550116399',
  appId: '1:71550116399:web:f606cb7e61c6759bbf9cda',
  measurementId: 'G-C2V9ZCWLXN'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {
  doc,
  app,
  auth,
  createUserWithEmailAndPassword,
  db,
  setDoc,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
}
