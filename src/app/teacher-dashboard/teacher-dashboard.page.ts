import { Component } from '@angular/core';

interface Student {
  studentNo: string;
  firstName: string;
  middleName: string;
  lastName: string;
  remarks: string;
  course: string;
  subject: string;
  timeIn: string; // Add timeIn property
}

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: 'teacher-dashboard.page.html',
  styleUrls: ['teacher-dashboard.page.scss']
})
export class TeacherDashboardPage {
  students: Student[] = [];
  isModalOpen = false;
  newStudent: Student = {
    studentNo: '',
    firstName: '',
    middleName: '',
    lastName: '',
    remarks: '',
    course: '',
    subject: '',
    timeIn: '' // Initialize timeIn property
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
    // Get current time and format it (you can use any desired format)
    const currentTime = new Date().toLocaleString();
    // Assign current time to timeIn property
    this.newStudent.timeIn = currentTime;
    // Add new student to the students array
    this.students.push({ ...this.newStudent });
    // Reset newStudent object for the next addition
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
    // Close the modal
    this.closeAddStudentModal();
  }

  removeStudent(index: number) {
    this.students.splice(index, 1);
  }
}
