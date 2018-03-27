import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityInfoTabComponent } from './facility-info-tab.component';

describe('FacilityInfoTabComponent', () => {
  let component: FacilityInfoTabComponent;
  let fixture: ComponentFixture<FacilityInfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityInfoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
