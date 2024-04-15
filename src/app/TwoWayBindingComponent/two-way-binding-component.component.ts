import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-component',
  templateUrl: './two-way-binding-component.component.html',
  styleUrl: './two-way-binding-component.component.scss'
})
export class TwoWayBindingComponentComponent {
  greetText:string = "";

  ngOnInit(){
    this.greetText = "Hello World";
  }

  TextChange(newValue:string){
    this.greetText = newValue;
  }

}
