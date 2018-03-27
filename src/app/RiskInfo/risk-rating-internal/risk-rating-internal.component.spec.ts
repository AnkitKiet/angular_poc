import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskRatingInternalComponent } from './risk-rating-internal.component';

describe('RiskRatingInternalComponent', () => {
  let component: RiskRatingInternalComponent;
  let fixture: ComponentFixture<RiskRatingInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskRatingInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskRatingInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
