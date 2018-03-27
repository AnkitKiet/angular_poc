import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryRiskComponent } from './industry-risk.component';

describe('IndustryRiskComponent', () => {
  let component: IndustryRiskComponent;
  let fixture: ComponentFixture<IndustryRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
