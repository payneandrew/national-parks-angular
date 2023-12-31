import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePageComponent } from './state-page.component';

describe('StatePageComponent', () => {
  let component: StatePageComponent;
  let fixture: ComponentFixture<StatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatePageComponent]
    });
    fixture = TestBed.createComponent(StatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
