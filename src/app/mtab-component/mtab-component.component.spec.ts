import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtabComponentComponent } from './mtab-component.component';

describe('MtabComponentComponent', () => {
  let component: MtabComponentComponent;
  let fixture: ComponentFixture<MtabComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtabComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
