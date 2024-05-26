import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPagePageRoutingModule } from './registration-page-routing.module';

import { RegistrationPagePage } from './registration-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPagePageRoutingModule
  ],
  declarations: [RegistrationPagePage]
})
export class RegistrationPagePageModule {}
