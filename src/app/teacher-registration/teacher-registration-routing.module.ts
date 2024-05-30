import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherRegistrationPage } from './teacher-registration.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRegistrationPageRoutingModule {}
