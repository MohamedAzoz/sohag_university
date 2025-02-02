import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentService } from '../../../service/student.service';
import { NavBarComponent } from '../student/nav-bar/nav-bar.component';

@Component({
  selector: 'app-student-dashboard',
imports: [RouterModule,NavBarComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent implements OnInit {
  user!:string;
constructor(
    private student_service:StudentService,
){}
  ngOnInit(): void {
    this.student_service.usercurrent().subscribe((userData)=>{
      if(userData!=undefined){
        this.user=userData.name
      }else{
        this.user="student"
      }
    })
  }
}
