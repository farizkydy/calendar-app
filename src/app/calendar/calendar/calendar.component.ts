import { Component } from '@angular/core';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';
import {
  MatIconModule,
} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    AppointmentFormComponent,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  appointments: any[] = [];

  addAppointment(appointment: any) {
    this.appointments.push(appointment);
  }

  deleteAppointment(appointment: any) {
    const index = this.appointments.indexOf(appointment);
    if (index !== -1) {
      this.appointments.splice(index, 1);
    }
  }

}
