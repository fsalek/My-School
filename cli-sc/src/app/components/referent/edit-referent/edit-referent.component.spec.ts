import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReferentComponent } from './edit-referent.component';

describe('EditReferentComponent', () => {
  let component: EditReferentComponent;
  let fixture: ComponentFixture<EditReferentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReferentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
