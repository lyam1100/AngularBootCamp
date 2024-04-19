import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputNameDialogComponent } from './DialogComponents/input-name-dialog/input-name-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name:string = '';
  
  constructor(public dialog: MatDialog){}
  
  ShowDialog(): void{
    const _dialog = this.dialog.open(InputNameDialogComponent, {
      width: '300px',
      data:{name:this.name}
    });

    _dialog.afterClosed().subscribe(result => {this.name = result});
  }
}
