import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoctorNavComponent } from '../doctor/doctor-nav/doctor-nav.component';

@Component({
  selector: 'app-doctor-dashboard',
  imports: [RouterOutlet,DoctorNavComponent],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css'
})
export class DoctorDashboardComponent {

}
