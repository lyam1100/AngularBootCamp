import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss'
})
export class IfComponent {
  array: string[] = [];

  ngOnInit(){
    this.array = ["A","B","C"];
  }
}
