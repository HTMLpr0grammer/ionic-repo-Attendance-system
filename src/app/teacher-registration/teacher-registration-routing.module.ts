import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherRegistrationPage } from './teacher-registration.page';
import { TeacherDashboardPage } from '../teacher-dashboard/teacher-dashboard.page';
import { TDashboardPage } from '../tdashboard/tdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherRegistrationPage
  },
  {
    path: 'teacherDashboard',
    component: TeacherDashboardPage,
   
  },
  {
    path: 'tdash',
    component: TDashboardPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRegistrationPageRoutingModule {}
