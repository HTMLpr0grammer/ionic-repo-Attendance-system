import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TDashboardPageRoutingModule } from './tdashboard-routing.module';

import { TDashboardPage } from './tdashboard.page';
import { TeacherDashboardPage } from '../teacher-dashboard/teacher-dashboard.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TDashboardPageRoutingModule,
    
  ],
  declarations: [TDashboardPage]
})
export class TDashboardPageModule {}
