import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonServiceService {
  valueText: string = "I'm a variable inside a singleton";
  constructor() { }
}
