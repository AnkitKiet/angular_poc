import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSqlLimitComponent } from './assessment-sql-limit.component';

describe('AssessmentSqlLimitComponent', () => {
  let component: AssessmentSqlLimitComponent;
  let fixture: ComponentFixture<AssessmentSqlLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentSqlLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentSqlLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
