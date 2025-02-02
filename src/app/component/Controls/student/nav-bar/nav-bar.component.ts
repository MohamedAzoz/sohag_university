import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../service/student.service';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationServiceService } from '../../../../service/authentication-service.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  user!:string;
constructor(
    private student_service:StudentService,
    private auth_service:AuthenticationServiceService,
    private router:Router
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

