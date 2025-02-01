import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReviewService } from '../../../../../service/review.service';
import { User } from '../../../../../models/user';
import { StudentService } from '../../../../../service/student.service';
import { Review } from '../../../../../models/review';

@Component({
  selector: 'app-review-home',
  imports: [RouterLink],
  templateUrl: './review-home.component.html',
  styleUrl: './review-home.component.css'
})
export class ReviewHomeComponent implements OnInit{
  reviews!:Review[]
  student:User={} as User
constructor(
  private exam_service:ReviewService,
    private student_service:StudentService

){}
  ngOnInit(): void {
    this.student_service.usercurrent().subscribe((ST)=>{
      if(ST){
        this.student=ST
      }
    })
    this.exam_service.getReviewByStudentId(this.student).subscribe((R)=>{
      if(R){
        this.reviews=R
      }
    })
  }
}
