import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNameDialogComponent } from './input-name-dialog.component';

describe('InputNameDialogComponent', () => {
  let component: InputNameDialogComponent;
  let fixture: ComponentFixture<InputNameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputNameDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
