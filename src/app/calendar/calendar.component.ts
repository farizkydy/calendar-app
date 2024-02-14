import { Component } from '@angular/core';
import {
  MatIconModule,
} from '@angular/material/icon';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    AppointmentFormComponent,
    MatIconModule,
    CommonModule,
    DragDropModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  appointments: any[] = [];

  addAppointment(appointment: any) {
    console.log('adding appointment', appointment)
    this.appointments.push(appointment);
  }

  deleteAppointment(appointment: any) {
    const index = this.appointments.indexOf(appointment);
    if (index !== -1) {
      this.appointments.splice(index, 1);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    const previousIndex = this.appointments.findIndex(appointment => appointment === event.item.data);
    this.appointments.splice(previousIndex, 1);
    this.appointments.splice(event.currentIndex, 0, event.item.data);
  }
  
}
