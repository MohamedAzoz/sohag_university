import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Summary } from '../../../../../models/summary';
import { SummaryServiceService } from '../../../../../service/summary-service.service';
import { User } from '../../../../../models/user';
import { StudentService } from '../../../../../service/student.service';

@Component({
  selector: 'app-summary-home',
  imports: [RouterLink],
  templateUrl: './summary-home.component.html',
  styleUrl: './summary-home.component.css'
})
export class SummaryHomeComponent implements OnInit{
  summaries!:Summary[]
  student:User={} as User
constructor(
  private exam_service:SummaryServiceService,
    private student_service:StudentService

){}
  ngOnInit(): void {
    this.student_service.usercurrent().subscribe((ST)=>{
      if(ST){
        this.student=ST
      }
    })
    this.exam_service.getSummaryByStudentId(this.student).subscribe((R)=>{
      if(R){
        this.summaries=R
      }
    })
  }
}
