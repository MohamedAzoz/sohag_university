import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../service/student.service';
import { DoctorService } from '../../../service/doctor.service';
import { AdminService } from '../../../service/admin.service';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from '../doctor-dashboard/doctor-dashboard.component';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main-dashboard',
  imports: [NavBarComponent,AdminDashboardComponent,DoctorDashboardComponent,StudentDashboardComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent implements OnInit{
  isAdmin:boolean=false;
  isDoctor:boolean=false;
  isStudent:boolean=false;
  role!:string;
 constructor(
  private student_service:StudentService,
  private doctor_service:DoctorService,
  private Admin_service:AdminService,
  private CookieService:CookieService

 ){}
  ngOnInit(): void {
    // this.student_service.student();
    let username=this.CookieService.get('token');
    this.Admin_service.checkAdmin(username);
    this.doctor_service.checkStudent(username);
    this.student_service.checkStudent(username);
    this.Admin_service.isbool().subscribe((A)=>{
      if(A){
        this.isAdmin=true;
      }else{
        this.isAdmin=false;
      }
    })
   this.doctor_service.isbool().subscribe((D)=>{
    if(D){
      this.isDoctor=true;
    }else{
      this.isDoctor=false
    }
   })

   this.student_service.isbool().subscribe((ST)=>{
    if(ST){
      this.isStudent=true;
    }else{
      this.isStudent=false
    }
})
  }

}
