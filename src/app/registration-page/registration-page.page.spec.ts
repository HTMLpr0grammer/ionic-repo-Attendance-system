import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationPagePage } from './registration-page.page';

describe('RegistrationPagePage', () => {
  let component: RegistrationPagePage;
  let fixture: ComponentFixture<RegistrationPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
