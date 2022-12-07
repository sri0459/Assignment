import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/';
import { Model } from './model.model';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private angularFirestore:AngularFirestore) { }


  getItemdata(id: string){
    return this.angularFirestore
    .collection('item-collection')
    .doc(id)
    .valueChanges()
  }

  getItemList(){
    return this.angularFirestore
    .collection("item-collection")
    .snapshotChanges();
  }

  createItem(item: unknown){
    return new Promise<any>((resolve,reject)=>{
      this.angularFirestore
      .collection("item-collection")
      .add(item)
      .then(response=>{console.log(response)},error=>reject(error)
      )
    })
  }


  deleteItem(item){
    return this.angularFirestore
    .collection("item-collection")
    .doc(item.id)
    .delete();
  }

  updateItem(item:Model,id: string){
    return this.angularFirestore
    .collection("item-collection")
    .doc(id)
    .update({
      name:item.name,
      price:item.price,
      description:item.description
    })
  }
}
