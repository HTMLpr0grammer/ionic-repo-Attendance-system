import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoicePageRoutingModule } from './choice-routing.module';

import { ChoicePage } from './choice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoicePageRoutingModule
  ],
  declarations: [ChoicePage]
})
export class ChoicePageModule {}
