import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalRiskComponent } from './operational-risk.component';

describe('OperationalRiskComponent', () => {
  let component: OperationalRiskComponent;
  let fixture: ComponentFixture<OperationalRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
