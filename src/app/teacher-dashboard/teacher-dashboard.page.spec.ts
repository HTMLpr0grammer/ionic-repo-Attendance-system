import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherDashboardPage } from './teacher-dashboard.page';

describe('TeacherDashboardPage', () => {
  let component: TeacherDashboardPage;
  let fixture: ComponentFixture<TeacherDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
