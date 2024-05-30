import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPagePage } from './login-page.page';
import { RegistrationPagePage } from '../registration-page/registration-page.page';
import { ChoicePage } from '../choice/choice.page';
import { TeacherRegistrationPage } from '../teacher-registration/teacher-registration.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPagePage
  },
  {
    path: 'choice',
    component: ChoicePage
  },
  {
    path: 'registration-page',
    component: RegistrationPagePage
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPagePageRoutingModule {}
