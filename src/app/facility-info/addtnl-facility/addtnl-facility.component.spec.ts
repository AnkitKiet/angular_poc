import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtnlFacilityComponent } from './addtnl-facility.component';

describe('AddtnlFacilityComponent', () => {
  let component: AddtnlFacilityComponent;
  let fixture: ComponentFixture<AddtnlFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtnlFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtnlFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
