import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootInjectable2Component } from './root-injectable2.component';

describe('RootInjectable2Component', () => {
  let component: RootInjectable2Component;
  let fixture: ComponentFixture<RootInjectable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RootInjectable2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RootInjectable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
