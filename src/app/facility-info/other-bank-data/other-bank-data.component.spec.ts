import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBankDataComponent } from './other-bank-data.component';

describe('OtherBankDataComponent', () => {
  let component: OtherBankDataComponent;
  let fixture: ComponentFixture<OtherBankDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherBankDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherBankDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
