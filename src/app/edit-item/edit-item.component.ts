import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent  implements OnInit{
   public EditForm: FormGroup;
   itemRef :any;

  constructor(public itemService:ItemService,public formbuilder:FormBuilder,private act :ActivatedRoute,private router:Router){
    this.EditForm=this.formbuilder.group({
      name:[''],
      price:[''],
      description:[''],
    })

  }
  ngOnInit(): void {
    const id= this.act.snapshot.paramMap.get('id');

    this.itemService.getItemdata(id).subscribe(res=>{
         this.itemRef=res;
         this.EditForm=this.formbuilder.group({
          name:[this.itemRef.name],
          price:[this.itemRef.price],
          description:[this.itemRef.description]
         })
    })
  }

  onSubmit(){
    const id=this.act.snapshot.paramMap.get('id');
    this.itemService.updateItem(this.EditForm.value,id);
    this.router.navigate(['list-item']);
  }

}
