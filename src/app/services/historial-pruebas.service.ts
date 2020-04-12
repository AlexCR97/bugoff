import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HistorialPruebasService {

  constructor(
    private afs:AngularFirestore,
  ) { }

  getPruebas(){
    return this.afs.collection('historialPruebas').snapshotChanges();
  }

  getPrueba(pruebaKey){
    return this.afs.collection('historialPruebas').doc(pruebaKey).valueChanges();
  }
}
