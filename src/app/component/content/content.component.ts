import { Component, OnInit } from '@angular/core';
import { ExamServiceService } from '../../service/exam-service.service';
import { ReviewService } from '../../service/review.service';
import { SubjectServiceService } from '../../service/subject-service.service';
import { SummaryServiceService } from '../../service/summary-service.service';
import { TestService } from '../../service/test.service';
import { Exam } from '../../models/exam';
import { Review } from '../../models/review';
import { Summary } from '../../models/summary';
import { Test } from '../../models/test';
import { SubjectInface } from '../../models/subject_inface';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  id!:string|null
 summarys!:Summary[]|null
  exam!:Exam[]|null
  test!:Test[]|null
  review!:Review[]|null
  name!:string
  constructor(
    private subject_Service:SubjectServiceService,
    private summary_Service:SummaryServiceService,
    private test_Service:TestService,
    private exam_Service:ExamServiceService,
    private review_Service:ReviewService,
  ){}
  ngOnInit(): void {
    this.subject_Service.currentContent.subscribe((v)=>{
      if(v){
        this.name=v
      }
    })
//     this.activa.paramMap.subscribe((Id)=>{
//       this.id=Id.get('content')

// });
// this.subject_Service.currentContent.subscribe((value)=>{
//   this.id=value
// })
this.subject_Service.currentSubject.subscribe((subject)=>{
  if(subject){
    // if(this.id=='summarys'){
      this.summary_Service.getSummary(subject).subscribe((S)=>{
        this.summarys=S
      });
    // }
    // else if(this.id=='reviews'){
    //   this.review_Service.getReview(subject).subscribe((R)=>{
    //     this.review=R
    //   });
    // // }else if(this.id=='tests'){
    //   this.test_Service.getTest(subject).subscribe((T)=>{
    //     this.test=T
    //   });
    // // }else if(this.id=='exams'){
    //   this.exam_Service.getExam(subject).subscribe((E)=>{
    //       this.exam=E
    //   });
    // }
  }
  });
}
isBoolen():boolean{
  if((this.exam?.length==0&& this.exam==null)
    || (this.test?.length==0 && this.test==null)
    ||( this.summarys?.length==0 && this.summarys==null)
    || (this.review?.length==0 && this.review==null)){
    return true;
  }else{
    return false;
  }

}
}
