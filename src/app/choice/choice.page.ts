import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-choice',
  templateUrl: './choice.page.html',
  styleUrls: ['./choice.page.scss'],
})
export class ChoicePage implements OnInit {
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  
  ngOnInit() {
  }

  async presentPasswordVerificationPopup() {
    const alert = await this.alertController.create({
      header: 'Password Verification',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Enter Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Verify',
          handler: (data) => {
            // Handle password verification
            const isValidPassword = this.verifyPassword(data.password);
            if (isValidPassword) {
              // Navigate to registration page
              this.navCtrl.navigateForward('teacher-registration');
            } else {
              // Handle invalid password
              
              this.showPasswordIncorrectAlert();
            }
          }
        }
      ]
    });
    

    await alert.present();
  }

  verifyPassword(password: string): boolean {
    // Your password validation logic here
    return password === 'teacher'; // Example validation
  }


  async showPasswordIncorrectAlert() {
    const alert = await this.alertController.create({
        header: 'Incorrect Password',
        message: 'Are you sure you are a TEACHER?',
        buttons: ['Try again']
    });

    await alert.present();
}
}
