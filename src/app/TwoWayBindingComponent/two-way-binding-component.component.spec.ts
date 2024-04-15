import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingComponentComponent } from './two-way-binding-component.component';

describe('TwoWayBindingComponentComponent', () => {
  let component: TwoWayBindingComponentComponent;
  let fixture: ComponentFixture<TwoWayBindingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoWayBindingComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoWayBindingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
