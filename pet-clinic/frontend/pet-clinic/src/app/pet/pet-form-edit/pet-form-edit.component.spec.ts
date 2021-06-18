import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFormEditComponent } from './pet-form-edit.component';

describe('PetFormEditComponent', () => {
  let component: PetFormEditComponent;
  let fixture: ComponentFixture<PetFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
