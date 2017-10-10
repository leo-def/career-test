import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUniversityEmployeeFormComponent } from './form.component';

describe('FormComponent', () => {
  let component: AdminUniversityEmployeeFormComponent;
  let fixture: ComponentFixture<AdminUniversityEmployeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUniversityEmployeeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUniversityEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
