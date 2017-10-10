import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPersonalityComponent as PersonalityComponent} from './personality.component';

describe('PersonalityComponent', () => {
  let component: PersonalityComponent;
  let fixture: ComponentFixture<PersonalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
