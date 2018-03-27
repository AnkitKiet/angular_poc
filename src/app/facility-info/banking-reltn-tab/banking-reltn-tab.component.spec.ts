import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingReltnTabComponent } from './banking-reltn-tab.component';

describe('BankingReltnTabComponent', () => {
  let component: BankingReltnTabComponent;
  let fixture: ComponentFixture<BankingReltnTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingReltnTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingReltnTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
