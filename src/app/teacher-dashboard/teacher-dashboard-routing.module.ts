import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherDashboardPage } from './teacher-dashboard.page';
import { TDashboardPage } from '../tdashboard/tdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherDashboardPage,
   
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherDashboardPageRoutingModule {}
