import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedetailComponent } from './feedetail.component';

describe('FeedetailComponent', () => {
  let component: FeedetailComponent;
  let fixture: ComponentFixture<FeedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
