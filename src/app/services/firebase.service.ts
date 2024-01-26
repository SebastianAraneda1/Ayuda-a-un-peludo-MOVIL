import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { user } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  fireStore = inject(AngularFirestore);

  //------------------Autenticación------------------
  //Iniciar sesión
  iniciarSesion(user:user) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  crearCuenta(user:user) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  actualizarUsuario(displayName:string){
    return updateProfile(getAuth().currentUser, { displayName });
  }

  //-----Base de datos-----

  setDocument( path:string, data:any ){
    return setDoc(doc(getFirestore(), path), data);
  }

}
