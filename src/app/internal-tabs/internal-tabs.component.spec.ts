import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTabsComponent } from './internal-tabs.component';

describe('InternalTabsComponent', () => {
  let component: InternalTabsComponent;
  let fixture: ComponentFixture<InternalTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
