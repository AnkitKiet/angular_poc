import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSqlComponent } from './assessment-sql.component';

describe('AssessmentSqlComponent', () => {
  let component: AssessmentSqlComponent;
  let fixture: ComponentFixture<AssessmentSqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentSqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
