import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityRatingComponent } from './facility-rating.component';

describe('FacilityRatingComponent', () => {
  let component: FacilityRatingComponent;
  let fixture: ComponentFixture<FacilityRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
