import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherRegistrationPage } from './teacher-registration.page';

describe('TeacherRegistrationPage', () => {
  let component: TeacherRegistrationPage;
  let fixture: ComponentFixture<TeacherRegistrationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
