import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  getEmpresas(){
    return this.afs.collection('empresas').snapshotChanges();
  }

  getEmpresa(empresaKey){
    return this.afs.collection('empresas').doc(empresaKey).valueChanges();
  }

  insertEmpresa(empresa){
    const db = this.afs.firestore;
    const batch = db.batch();

    let empresaRef = db.collection('empresas').doc(empresa.uid);
    batch.set(empresaRef,empresa);

    batch.commit()
    .then(resolve =>{
      console.log(resolve);
    })
    .catch(error =>{
      console.log(error);
    });
  }
  
}
