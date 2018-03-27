import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsNdCondnComponent } from './terms-nd-condn.component';

describe('TermsNdCondnComponent', () => {
  let component: TermsNdCondnComponent;
  let fixture: ComponentFixture<TermsNdCondnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsNdCondnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsNdCondnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
