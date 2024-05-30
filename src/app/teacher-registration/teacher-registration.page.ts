import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.page.html',
  styleUrls: ['./teacher-registration.page.scss'],
})
export class TeacherRegistrationPage implements OnInit {

  //example pani
  teacher = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
   
  };

  constructor() { }

  ngOnInit() {
  }


  onRegister() {
    // Add your registration logic here
    console.log('Teacher registered:', this.teacher);
  }
}
