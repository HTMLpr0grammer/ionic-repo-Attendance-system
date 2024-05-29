import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor() {}

  ngOnInit() {}

  async generateQRCode(studentName: string, course: string) {
    const text = `Student: ${studentName}, Course: ${course}`;
    const qrCodeContainer = document.getElementById('qrcode');
    if (qrCodeContainer) {
      qrCodeContainer.innerHTML = ''; // Clear previous QR code
      try {
        const qrCode = await QRCode.toDataURL(text);
        const img = document.createElement('img');
        img.src = qrCode;
        qrCodeContainer.appendChild(img);
        this.showPopup();
      } catch (error) {
        console.error('Error generating QR code', error);
      }
    }
  }

  showPopup() {
    const qrPopup = document.getElementById('qrPopup');
    if (qrPopup) {
      qrPopup.style.display = 'block';
    }
  }

  closePopup() {
    const qrPopup = document.getElementById('qrPopup');
    if (qrPopup) {
      qrPopup.style.display = 'none';
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const studentName = (document.getElementById('studentName') as HTMLInputElement).value;
    const course = (document.getElementById('course') as HTMLInputElement).value;
    if (studentName && course) {
      this.generateQRCode(studentName, course);
    } else {
      alert('Please fill in both fields.');
    }
  }
}


