import { Component } from '@angular/core';
import { ProviderService } from '../../providers/provider.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.scss'
})
export class ProviderComponent {
  numbers: string[];
  constructor(public providerService: ProviderService){
    this.numbers = providerService.numbers;
  }
}
