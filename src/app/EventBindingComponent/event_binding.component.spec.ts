import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventBindingComponent } from './event_binding.component';

describe('EventBindingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        EventBindingComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EventBindingComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularBootCamp'`, () => {
    const fixture = TestBed.createComponent(EventBindingComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularBootCamp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EventBindingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, AngularBootCamp');
  });
});
