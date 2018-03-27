import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskInfoComponent } from './risk-info.component';

describe('RiskInfoComponent', () => {
  let component: RiskInfoComponent;
  let fixture: ComponentFixture<RiskInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
