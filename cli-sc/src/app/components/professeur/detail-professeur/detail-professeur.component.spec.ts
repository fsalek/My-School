import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfesseurComponent } from './detail-professeur.component';

describe('DetailProfesseurComponent', () => {
  let component: DetailProfesseurComponent;
  let fixture: ComponentFixture<DetailProfesseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProfesseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
