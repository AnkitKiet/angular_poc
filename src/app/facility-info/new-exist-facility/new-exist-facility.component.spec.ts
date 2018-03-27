import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExistFacilityComponent } from './new-exist-facility.component';

describe('NewExistFacilityComponent', () => {
  let component: NewExistFacilityComponent;
  let fixture: ComponentFixture<NewExistFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExistFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExistFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
