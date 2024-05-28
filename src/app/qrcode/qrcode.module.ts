import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRCodePageRoutingModule } from './qrcode-routing.module';

import { QRCodePage } from './qrcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodePageRoutingModule
  ],
  declarations: [QRCodePage]
})
export class QRCodePageModule {}
