import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoicePage } from './choice.page';
import { RegistrationPagePage } from '../registration-page/registration-page.page';
import { TeacherRegistrationPage } from '../teacher-registration/teacher-registration.page';

const routes: Routes = [
  {
    path: ' ',
    component: ChoicePage
  },
  {
    path: 'registration-page',
    component:RegistrationPagePage
  },
  {
    path: 'teacher-registration-page',
    component: TeacherRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoicePageRoutingModule {}
