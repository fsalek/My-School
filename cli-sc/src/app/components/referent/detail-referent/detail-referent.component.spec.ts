import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReferentComponent } from './detail-referent.component';

describe('DetailReferentComponent', () => {
  let component: DetailReferentComponent;
  let fixture: ComponentFixture<DetailReferentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReferentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
