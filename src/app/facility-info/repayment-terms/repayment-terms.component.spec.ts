import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaymentTermsComponent } from './repayment-terms.component';

describe('RepaymentTermsComponent', () => {
  let component: RepaymentTermsComponent;
  let fixture: ComponentFixture<RepaymentTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepaymentTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepaymentTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
