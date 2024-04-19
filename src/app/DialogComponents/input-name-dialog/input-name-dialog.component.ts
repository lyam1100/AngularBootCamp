import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-input-name-dialog',
  templateUrl: './input-name-dialog.component.html',
  styleUrl: './input-name-dialog.component.scss'
})
export class InputNameDialogComponent {
  name: string = '';

  constructor(public dialog: MatDialogRef<InputNameDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:{name:string}){}

  cancel(): void {
    this.dialog.close();
  }

  

}
