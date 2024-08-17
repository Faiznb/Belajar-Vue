import { defineStore } from 'pinia'
import {
  auth as firebaseAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setDoc,
  updateProfile,
  doc,
  db,
  signOut
} from '@/includes/firebase'
export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(value) {
      const userCred = await createUserWithEmailAndPassword(
        firebaseAuth,
        value.email,
        value.password
      )

      await setDoc(doc(db, 'users', userCred.user.uid), {
        name: value.name,
        email: value.email,
        age: value.age,
        country: value.country,
        createdAt: new Date()
      })

      await updateProfile(userCred.user, {
        displayName: value.name
      })

      this.userLoggedIn = true
    },
    async authenticate(values) {
      await signInWithEmailAndPassword(firebaseAuth, values.email, values.password)

      this.userLoggedIn = true
    },
    async signOut() {
      await signOut(firebaseAuth)
      this.userLoggedIn = false
    }
  }
})
