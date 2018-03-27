import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalAgencyComponent } from './external-agency.component';

describe('ExternalAgencyComponent', () => {
  let component: ExternalAgencyComponent;
  let fixture: ComponentFixture<ExternalAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
