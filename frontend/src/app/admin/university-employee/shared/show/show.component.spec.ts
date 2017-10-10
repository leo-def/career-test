import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUniversityEmployeeShowComponent } from './show.component';

describe('ShowComponent', () => {
  let component: AdminUniversityEmployeeShowComponent;
  let fixture: ComponentFixture<AdminUniversityEmployeeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUniversityEmployeeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUniversityEmployeeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
