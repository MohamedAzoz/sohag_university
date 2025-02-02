import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DoctorService } from '../../../../service/doctor.service';
import { AuthenticationServiceService } from '../../../../service/authentication-service.service';

@Component({
  selector: 'app-doctor-nav',
  imports: [RouterModule],
  templateUrl: './doctor-nav.component.html',
  styleUrl: './doctor-nav.component.css'
})
export class DoctorNavComponent implements OnInit {
  user!:string;
constructor(
    private student_service:DoctorService,
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
