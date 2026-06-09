import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgradecimientoPage } from './agradecimiento.page';

describe('AgradecimientoPage', () => {
  let component: AgradecimientoPage;
  let fixture: ComponentFixture<AgradecimientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgradecimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
