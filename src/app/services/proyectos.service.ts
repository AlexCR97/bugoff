import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  getProyectos(){
    return this.afs.collection('proyectos').snapshotChanges();
  }

  getProyecto(proyectoKey){
    return this.afs.collection('proyectos').doc(proyectoKey).valueChanges();
  }

  insertProyecto(proyecto,empresa){
    const db = this.afs.firestore;
    const batch = db.batch();

    let proyectoRef = db.collection('proyectos').doc(proyecto.uid);
    let empresaRef = db.collection('empresas').doc(empresa.uid);

    batch.set(proyectoRef,proyecto);
    batch.set(empresaRef,{
      proyectos:{
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

  updateProyecto(proyecto){
    const db = this.afs.firestore;
    const batch = db.batch();

    let proyectoRef = db.collection('proyectos').doc(proyecto.uid);

    batch.update(proyectoRef,{
      "descripcion":proyecto.descripcion,
    });

    batch.commit()
    .then(resolve => {
      console.log(resolve);
    })
    .catch(
      error =>{
        console.log(error);
      }
    );
  }

}
