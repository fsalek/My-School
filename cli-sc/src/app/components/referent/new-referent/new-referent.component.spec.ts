import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReferentComponent } from './new-referent.component';

describe('NewReferentComponent', () => {
  let component: NewReferentComponent;
  let fixture: ComponentFixture<NewReferentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReferentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
