import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastreComponent } from './cadastre.component';

describe('CadastreComponent', () => {
  let component: CadastreComponent;
  let fixture: ComponentFixture<CadastreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
