import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUniversityEmployeeComponent } from './university-employee.component';

describe('UniversityEmployeeComponent', () => {
  let component: AdminUniversityEmployeeComponent;
  let fixture: ComponentFixture<AdminUniversityEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUniversityEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUniversityEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
