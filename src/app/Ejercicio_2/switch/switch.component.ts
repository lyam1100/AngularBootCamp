import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  array: string[] = [];

  ngOnInit(){
    this.array = ["A","B","C"];
  }
}
