import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VersionesService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  getVersion(versionKey){
    return this.afs.collection('proyectos').doc(versionKey).valueChanges();
  }

  getVersiones(){
    return this.afs.collection('proyectos').snapshotChanges();
  }

  insertVersion(proyecto,version){
    const db = this.afs.firestore;
    const batch = db.batch();

    let proyectosRef = db.collection('proyectos').doc(proyecto.uid);
    let versionesRef = db.collection('versiones').doc(version.uid);


    batch.set(versionesRef,version);
    batch.set(proyectosRef,{
      versiones:{
        uid:proyecto.uid,
      },
    });

    batch.commit()
    .then(resolve => {
      console.log(resolve);
    })
    .catch(error =>{
    });
  }

  updateVersion(version){
    const db = this.afs.firestore;
    const batch = db.batch();

    let versionesRef = db.collection('versiones').doc(version.uid);

    batch.update(versionesRef,{
      "link":version.link,
      "clave":version.clave,
      "nombre":version.nombre,
      "descripcion":version.descripcion,
      "usuarios":version.usuarios,
    });

    batch.commit()
    .then(resolve => {
      console.log(resolve);
    })
    .catch(error =>{
    });
  }

}
