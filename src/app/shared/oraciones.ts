import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
    providedIn: 'root'
})

export class OracionesService {
    constructor(
        // private firestore: AngularFirestore,
        private db: AngularFireDatabase
    ) {}
    
  public cuantosFaltan(estado: string) {
    let cuanto: number;
    let algo: any;
    algo = this.db.list('/oraciones', ref => ref.orderByChild('estado').equalTo(estado)).valueChanges()
    .subscribe( val => { 
      cuanto = val.length;
      console.log("faltan ",cuanto)
    } )
    return cuanto;
  }

  public getOracionesX1(estado: string) {

    // let data = [];
    // this.db.list('/oraciones').snapshotChanges().subscribe(oraciones => {
    //   oraciones.forEach((catData: any) => {
    //     data.push({
    //       oracion: catData.payload.child("oracion").val(),
    //       estado: catData.payload.child("estado").val(),
    //       id: catData.key,
    //     });
    //   })
    // });

    let data = [];
    this.db.list('/oraciones', ref => ref.orderByChild('estado').equalTo(estado))
    .snapshotChanges()
    .subscribe( oraciones => {
      oraciones.forEach((oracionData: any) => {
        const oracion = oracionData.payload.child("oracion").val();
        const estado = oracionData.payload.child("estado").val();
        const key = oracionData.key;
        // console.log(estado, oracion, key)
        data.length=0; // ahi queda solo la ultima
        data.push({id: key, oracion: oracion, estado: estado});
      })    
    })
    console.log(data);
    return data;
  }
  
  public getOracionesX9(estado: string) {
    let data = [];
    this.db.list('/oraciones', ref => ref.orderByChild('estado').equalTo(estado))
    .snapshotChanges()
    .subscribe( oraciones => {
      oraciones.forEach((oracionData: any) => {
        const oracion = oracionData.payload.child("oracion").val();
        const estado = oracionData.payload.child("estado").val();
        const key = oracionData.key;
        // console.log(estado, oracion, key)
        // data.length=0; // ahi queda solo la ultima
        data.push({id: key, oracion: oracion, estado: estado});
      })    
    })
    console.log(data);
    return data;
  }

  public setOraciones(oracion) {
    this.db.list('/oraciones').set(oracion.id, oracion);
  }

    
}
