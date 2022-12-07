import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  public ItemForm : FormGroup;

  constructor(public item:ItemService,public fb:FormBuilder,public router:Router){
    this.ItemForm=this.fb.group({
      name:[''],
      price:[''],
      description:['']
    })
  }
  ngOnInit(): void {
    
     }



  onSubmit(){
    this.item.createItem(this.ItemForm.value);
    this.router.navigate(['list-item']);
  }
}
