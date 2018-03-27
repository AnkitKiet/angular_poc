import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskRatingIfrsComponent } from './risk-rating-ifrs.component';

describe('RiskRatingIfrsComponent', () => {
  let component: RiskRatingIfrsComponent;
  let fixture: ComponentFixture<RiskRatingIfrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskRatingIfrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskRatingIfrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
