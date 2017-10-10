import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppraisalComponent as AppraisalComponent } from './appraisal.component';

describe('AppraisalComponent', () => {
  let component: AppraisalComponent;
  let fixture: ComponentFixture<AppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
