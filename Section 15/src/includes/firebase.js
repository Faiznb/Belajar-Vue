import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  getDoc,
  limit,
  orderBy,
  startAfter,
  onSnapshot
} from 'firebase/firestore'

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
} from 'firebase/storage'
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
const songsCollection = collection(db, 'songs')
const commentsCollection = collection(db, 'comments')

export {
  commentsCollection,
  onSnapshot,
  startAfter,
  orderBy,
  getDoc,
  limit,
  updateDoc,
  query,
  where,
  getDocs,
  songsCollection,
  storage,
  addDoc,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteDoc,
  deleteObject,
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
