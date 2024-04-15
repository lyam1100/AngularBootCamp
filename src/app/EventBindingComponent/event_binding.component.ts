import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event_binding.component.html',
  styleUrl: './event_binding.component.scss'
})
export class EventBindingComponent {
  title = 'AngularBootCamp';

  public Click(){
    alert("I was triggered by an event");
  }
}
