import { Component, OnInit } from '@angular/core';
import { Review } from '../../../../../models/review';
import { SubjectInface } from '../../../../../models/subject_inface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewService } from '../../../../../service/review.service';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../../../../../service/student.service';
import { environment } from '../../../../../../environments/environment.development';

@Component({
  selector: 'app-review-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent implements OnInit{
 review!:Review
  selectFile:File|null=null;
  subjects!:SubjectInface[]|null
  message!:string;
  StId!:string;
  yearId!:string;
  reviews!:Review[]
   constructor(
    private http:HttpClient,
    private review_service:ReviewService,
    private student_service:StudentService
   ){}
    ngOnInit(): void {
      //  this.student_service.setStudentData();
      //  this.student_service.setSubject();
      //  this.student_service.getSubjects().subscribe((sub)=>{
      //   if(sub){
      //     this.subjects=sub;
      //   }else{
      //     this.subjects=null;
      //   }
      //  })

      }
  //  onFileSelect(event: any) {
  //   this.selectFile = event.target.files[0];
  // }
  //  onSubmit(form:any){
  //   if(form.valid && this.selectFile){
  //     const dataForm=new FormData();
  //      dataForm.append('title',form.title);
  //      dataForm.append('title',form.title);
  //      dataForm.append('title',form.title);
  //      dataForm.append('title',form.title);
  //      this.http.post(`${environment.apiUrl}/review/`,dataForm).subscribe((response)=>{
  //       console.log("تم رفع الا متحان",response);
  //      })

  //       }
  //   }

  onSubmit(){
  this.review_service.AddReview(this.review).subscribe((R)=>{
    if(R){
      this.message="been exam add successfully";
    }else{
      this.message="error"
    }
  })
  }
}
