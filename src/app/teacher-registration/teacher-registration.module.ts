import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherRegistrationPageRoutingModule } from './teacher-registration-routing.module';

import { TeacherRegistrationPage } from './teacher-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherRegistrationPageRoutingModule
  ],
  declarations: [TeacherRegistrationPage]
})
export class TeacherRegistrationPageModule {}
