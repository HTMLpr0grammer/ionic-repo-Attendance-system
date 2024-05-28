import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRCodePage } from './qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: QRCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRCodePageRoutingModule {}
