import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NthFibonacciLabelComponent } from './nth-fibonacci-label.component';

describe('NthFibonacciLabelComponent', () => {
  let component: NthFibonacciLabelComponent;
  let fixture: ComponentFixture<NthFibonacciLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NthFibonacciLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NthFibonacciLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
