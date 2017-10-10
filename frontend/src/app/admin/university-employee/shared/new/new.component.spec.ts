import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUniversityEmployeeNewComponent } from './new.component';

describe('NewComponent', () => {
  let component: AdminUniversityEmployeeNewComponent;
  let fixture: ComponentFixture<AdminUniversityEmployeeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUniversityEmployeeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUniversityEmployeeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
