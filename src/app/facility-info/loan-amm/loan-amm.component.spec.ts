import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAmmComponent } from './loan-amm.component';

describe('LoanAmmComponent', () => {
  let component: LoanAmmComponent;
  let fixture: ComponentFixture<LoanAmmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAmmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
