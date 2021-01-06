import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferentsComponent } from './referents.component';

describe('ReferentsComponent', () => {
  let component: ReferentsComponent;
  let fixture: ComponentFixture<ReferentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
