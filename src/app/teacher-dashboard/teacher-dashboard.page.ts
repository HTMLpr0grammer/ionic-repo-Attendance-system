import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: 'teacher-dashboard.page.html',
  styleUrls: ['teacher-dashboard.page.scss']
})
export class TeacherDashboardPage {
  students = [
    {
      studentNo: '',
      firstName: '',
      middleName: '',
      lastName: '',
      remarks: '',
      course: '',
      subject: '',
      timeIn: ''
    }
  ];

  isModalOpen = false;

  newStudent = {
    studentNo: '',
    firstName: '',
    middleName: '',
    lastName: '',
    remarks: '',
    course: '',
    subject: '',
    timeIn: ''
  };

  constructor() {}

  openAddStudentModal() {
    this.isModalOpen = true;
  }

  closeAddStudentModal() {
    this.isModalOpen = false;
  }

  addStudent(event: Event) {
    event.preventDefault();
    this.students.push({ ...this.newStudent });
    this.newStudent = {
      studentNo: '',
      firstName: '',
      middleName: '',
      lastName: '',
      remarks: '',
      course: '',
      subject: '',
      timeIn: ''
    };
    this.closeAddStudentModal();
  }
}