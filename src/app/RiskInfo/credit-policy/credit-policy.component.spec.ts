import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPolicyComponent } from './credit-policy.component';

describe('CreditPolicyComponent', () => {
  let component: CreditPolicyComponent;
  let fixture: ComponentFixture<CreditPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
