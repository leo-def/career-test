import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionsComponent } from './select-options.component';

describe('SelectOptionsComponent', () => {
  let component: SelectOptionsComponent;
  let fixture: ComponentFixture<SelectOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
