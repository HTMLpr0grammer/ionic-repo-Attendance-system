import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.page.html',
  styleUrls: ['./registration-page.page.scss'],
})
export class RegistrationPagePage implements OnInit {
  fullName: string = '';
  gender: string = '';
  idNumber: string = '';
  course: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  Register() {
    // Add your registration logic here
    console.log('Teacher registered:', this.fullName);
  }
  async register() {
    try {
      await this.authService.register(this.email, this.fullName, this.gender, this.idNumber, this.course,);
      this.router.navigate(['/tabs']);
    } catch (error) {
      console.error("Registration Error: ", error);
       //Optionally show an error message to the user
    }
  }
}