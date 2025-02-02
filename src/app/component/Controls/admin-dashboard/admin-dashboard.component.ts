import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavComponent } from '../Admin/App_Admin_pages/admin-nav/admin-nav.component';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterOutlet,AdminNavComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
constructor(){}
}
