import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';

  constructor(private dialog: MatDialog){

  }

  openDialog(){
    this.dialog.open(ItemDialogComponent,{
      width:'30%'
    });
  }
}
