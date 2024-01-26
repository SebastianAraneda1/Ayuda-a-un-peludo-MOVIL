import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerrosPage } from './perros.page';

describe('PerrosPage', () => {
  let component: PerrosPage;
  let fixture: ComponentFixture<PerrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
