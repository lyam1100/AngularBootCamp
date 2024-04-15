import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrl: './one-way-binding.component.scss'
})
export class OneWayBindingComponent {
  greetText:string = "";

  ngOnInit(){
    this.greetText = "Hello World";
  }

}
