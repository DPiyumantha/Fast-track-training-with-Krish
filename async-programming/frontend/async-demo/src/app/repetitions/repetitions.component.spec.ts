import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetitionsComponent } from './repetitions.component';

describe('RepetitionsComponent', () => {
  let component: RepetitionsComponent;
  let fixture: ComponentFixture<RepetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepetitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
