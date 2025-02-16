import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../app-home/navbar/navbar.component";

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
constructor(){}
}
