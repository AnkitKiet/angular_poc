import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinTrendsComponent } from './fin-trends.component';

describe('FinTrendsComponent', () => {
  let component: FinTrendsComponent;
  let fixture: ComponentFixture<FinTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
