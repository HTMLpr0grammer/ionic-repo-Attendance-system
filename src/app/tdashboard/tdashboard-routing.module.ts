import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TDashboardPage } from './tdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TDashboardPage,
     
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TDashboardPageRoutingModule {}
