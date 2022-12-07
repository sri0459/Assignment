import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Model } from '../model.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  Item :Model[];

  // item: any;

  constructor(private itemservice:ItemService){

  }
  ngOnInit() : void{
    this.itemservice.getItemList().subscribe(res=>{
      this.Item=res.map(e=>{
       return {
        id:e.payload.doc.id,
        ...e.payload.doc.data()as{}
       }  as Model;
      })
    });
  }

  removeItem(item){
   if(confirm("are you sure to delete"+item.name)){
    this.itemservice.deleteItem(item)
   }
  }
  

}
