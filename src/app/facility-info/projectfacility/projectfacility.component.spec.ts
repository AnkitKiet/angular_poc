import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectfacilityComponent } from './projectfacility.component';

describe('ProjectfacilityComponent', () => {
  let component: ProjectfacilityComponent;
  let fixture: ComponentFixture<ProjectfacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectfacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectfacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
