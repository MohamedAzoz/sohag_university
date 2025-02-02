import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../service/admin.service';
import { AuthenticationServiceService } from '../../../../../service/authentication-service.service';
import {  RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  imports: [RouterModule,RouterLink],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css'
})
export class AdminNavComponent implements OnInit {
  user!:string;
constructor(
    private student_service:AdminService,
    private auth_service:AuthenticationServiceService,
){}
  ngOnInit(): void {
    this.student_service.usercurrent().subscribe((userData)=>{
      if(userData!=undefined){
        this.user=userData.name
      }
    });
  }
  Logout(){
     this.auth_service.logout();

  }
}
