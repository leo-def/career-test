import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUniversityEmployeeListComponent } from './list.component';

describe('AllComponent', () => {
  let component: AdminUniversityEmployeeListComponent;
  let fixture: ComponentFixture<AdminUniversityEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUniversityEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUniversityEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
