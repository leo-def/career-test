import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfessionComponent as ProfessionComponent } from './profession.component';

describe('ProfessionComponent', () => {
  let component: ProfessionComponent;
  let fixture: ComponentFixture<ProfessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
