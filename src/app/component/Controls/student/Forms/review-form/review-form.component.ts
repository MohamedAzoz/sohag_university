import { Component, OnInit } from '@angular/core';
import { Review } from '../../../../../models/review';
import { SubjectInface } from '../../../../../models/subject_inface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewService } from '../../../../../service/review.service';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../../../../../service/student.service';
import { environment } from '../../../../../../environments/environment.development';
import { SubjectServiceService } from '../../../../../service/subject-service.service';
import { StudentData } from '../../../../../models/student-data';
import { User } from '../../../../../models/user';

@Component({
  selector: 'app-review-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent implements OnInit{
 date:Date=new Date
user:User={} as User
userd:StudentData|undefined;
  review:Review={} as Review
  selectFile:File|null=null;
  subjects:SubjectInface[]=[] as SubjectInface[]
  message!:string;
  bool!:boolean;
 constructor(
  private http:HttpClient,
  private review_service:ReviewService,
  private subject_service:SubjectServiceService,
  private student_service:StudentService
 ){

  // this.student_service.usercurrent().subscribe((ST)=>{
  //   if(ST){
  //     this.user=ST
  //     this.student_service.setuser(ST);
  //     // console.log(this.user);
  //     // console.log(this.user.username);
  //   }
  // });
  //   this.student_service.userData.subscribe((data)=>{
  //     if(data){

  //       ObservableSubjects=this.subject_service.getSubjects(data.yearId);
  //       console.log(data);
  //     }

  //   });

  //   ObservableSubjects.subscribe((s)=>{
  //     if(s){
  //       this.subjects=s
  //       console.log(this.subjects[0]);
  //     }else{
  //       this.subjects=[]
  //       console.log(this.subjects);
  //     }
  //   })

  this.student_service.usercurrent().subscribe((ST)=>{
    if(ST){
    this.review.uploadedBy=ST.id;
      student_service.setuser(ST);
    }
  });
  student_service.userData.subscribe((data)=>{
      if(data){
        this.subject_service.setSubs(data.yearId);
        console.log(data);
      }

    });

    subject_service.currentSubs.subscribe((s)=>{
      if(s){
        this.subjects=s
      }else{
        this.subjects=[]
      }
    })
 }
  ngOnInit(): void {

    }

onSubmit(){
  if(this.review){
    this.review.updatedAt=this.date
    this.review_service.AddReview(this.review).subscribe((EX)=>{
      if(EX){
        this.message="been Your add successfully";
        this.bool=true;
      }else{
        this.message="error in Add";
        this.bool=false;
      }
    })
  }
}
}
