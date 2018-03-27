import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityIntTabsComponent } from './facility-int-tabs.component';

describe('FacilityIntTabsComponent', () => {
  let component: FacilityIntTabsComponent;
  let fixture: ComponentFixture<FacilityIntTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityIntTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityIntTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
