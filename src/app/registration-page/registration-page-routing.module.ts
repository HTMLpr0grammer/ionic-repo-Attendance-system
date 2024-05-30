import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationPagePage } from './registration-page.page';
import { HomePagePage } from '../home-page/home-page.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPagePage
  },
  {
    path: 'home-page',
    component: HomePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationPagePageRoutingModule {}
