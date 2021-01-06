import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScoolComponent } from './my-scool.component';

describe('MyScoolComponent', () => {
  let component: MyScoolComponent;
  let fixture: ComponentFixture<MyScoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyScoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyScoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
