import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootInjectable1Component } from './root-injectable1.component';

describe('RootInjectable1Component', () => {
  let component: RootInjectable1Component;
  let fixture: ComponentFixture<RootInjectable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RootInjectable1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RootInjectable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
