import { Component } from '@angular/core';
import { SingletonServiceService } from '../providers/singleton-service.service';

@Component({
  selector: 'app-root-injectable1',
  templateUrl: './root-injectable1.component.html',
  styleUrl: './root-injectable1.component.scss'
})
export class RootInjectable1Component {
  constructor(public singletonService: SingletonServiceService){}
}
