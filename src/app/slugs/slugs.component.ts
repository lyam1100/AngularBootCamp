import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slugs',
  templateUrl: './slugs.component.html',
  styleUrl: './slugs.component.scss'
})
export class SlugsComponent {
  slug: string | null = '';

  constructor(private route:  ActivatedRoute){}

  ngOnInit(): void{
    this.slug = this.route.snapshot.paramMap.get('slug');
  }
}
