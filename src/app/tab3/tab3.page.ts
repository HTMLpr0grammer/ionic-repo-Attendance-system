import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var QRCode: any;

@Component({
  selector: 'app-qrcode',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const form = document.getElementById('qr-form') as HTMLFormElement;
    form.addEventListener('submit', this.generateQRCode.bind(this));
  }

  generateQRCode(event: Event) {
    event.preventDefault();

    const date = (document.getElementById('date') as HTMLInputElement).value;
    const className = (document.getElementById('class') as HTMLInputElement).value;
    const startTime = (document.getElementById('start-time') as HTMLInputElement).value;
    const endTime = (document.getElementById('end-time') as HTMLInputElement).value;

    const qrData = `Date: ${date}\nClass: ${className}\nStart Time: ${startTime}\nEnd Time: ${endTime}`;

    const qrCodeElement = document.getElementById('qrcode');

    new QRCode(qrCodeElement, {
      text: qrData,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
}


