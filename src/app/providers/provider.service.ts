import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  numbers:string[] = ['one', 'two'];

  constructor() { }
}
