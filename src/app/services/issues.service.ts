import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(
    private afs: AngularFirestore,
  ) { }


  getIssues(){
    return this.afs.collection('issues').snapshotChanges();
  }

  getIssue(issueKey){
    return this.afs.collection('issues').doc(issueKey).valueChanges();
  }

  insertarIssue(version,issue){
    const db = this.afs.firestore;
    const batch = db.batch();

    let versionRef = db.collection('versiones').doc(version.uid);
    let issueRef = db.collection('issues').doc(issue.uid);

    batch.set(issueRef,issue);
    batch.set(versionRef, {
      "issues": issue.uid,
    });

    batch.commit()
    .then(resolve => {
      console.log(resolve);
    })
    .catch(error =>{
    });
  }

  updateIssue(issue){
    const db = this.afs.firestore;
    const batch = db.batch();

    let issueRef = db.collection('issues').doc(issue.uid);
    let imagenesRef = db.collection('imagenes').doc();

    //Insertar imagen no supe como obtener el uid
    batch.set(imagenesRef,issue.imagenes);

    batch.update(issueRef,{
      "usuarioCreador": issue.usuarioCreador,
      "nombre": issue.nombre,
      "descripcion": issue.descripcion,
      "estatus": issue.estatus,
      "exigencia": issue.exigencia,
      "fechaEncargada": issue.fechaEncargada,
      "fechaEntrega": issue.fechaEntrega,
      "responsables": issue.responsables,
      "imagenes": "imagen.uid",
    });

    batch.commit()
    .then(resolve => {
      console.log(resolve);
    })
    .catch(error =>{
    });

  }
  
  terminarIssue(issue){
    const db = this.afs.firestore;
    const batch = db.batch();

    let historialPruebasRef = db.collection('historialPruebas').doc();

    batch.set(historialPruebasRef,issue);
    
    batch.commit()
    .then(resolve => {
      console.log(resolve);
    })
    .catch(error =>{
    });
  }
}
