import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  async register(email: string, password: string, fullName: string, gender: string, idNumber: string) {
    try {
      // Create user with email and password
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      
      if (!userCredential || !userCredential.user) {
        throw new Error('User credential is null or undefined');
      }

      const user = userCredential.user;

      // Add additional user info to Firestore
      await this.firestore.collection('users').doc(user.uid).set({
        fullName,
        gender,
        idNumber,
        email,
        password,
        
      });

      return user;
    } catch (error) {
      console.error('Registration Error: ', error);
      throw error;
    }
  }

 
}















  //async login(email: string, password: string) {
    //try {
      //const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      //return result;
    //} catch (error) {
      //throw error;
    //}
  //}

  //async logout() {
    //await this.afAuth.signOut();
  //}

  //getUser() {
    //return this.afAuth.authState;
  //}
//}
