import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContigencyRiskComponent } from './contigency-risk.component';

describe('ContigencyRiskComponent', () => {
  let component: ContigencyRiskComponent;
  let fixture: ComponentFixture<ContigencyRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContigencyRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContigencyRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
