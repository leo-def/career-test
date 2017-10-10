import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppraisalTypeComponent as AppraisalTypeComponent } from './appraisal-type.component';

describe('AppraisalTypeComponent', () => {
  let component: AppraisalTypeComponent;
  let fixture: ComponentFixture<AppraisalTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
