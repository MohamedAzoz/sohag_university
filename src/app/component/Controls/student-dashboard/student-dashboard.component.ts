import { Component } from '@angular/core';
import { NavBarComponent } from '../student/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
imports: [NavBarComponent,RouterOutlet],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {
constructor(){}
}
