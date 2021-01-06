import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfesseurComponent } from './edit-professeur.component';

describe('EditProfesseurComponent', () => {
  let component: EditProfesseurComponent;
  let fixture: ComponentFixture<EditProfesseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfesseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
