import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinParaComponent } from './fin-para.component';

describe('FinParaComponent', () => {
  let component: FinParaComponent;
  let fixture: ComponentFixture<FinParaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinParaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
