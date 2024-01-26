import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GatosPage } from './gatos.page';

describe('GatosPage', () => {
  let component: GatosPage;
  let fixture: ComponentFixture<GatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
