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
//  summarys!:Summary[]|null
//   exam!:Exam[]|null
//   test!:Test[]|null
//   review!:Review[]|null
  name!:string
  content:Summary[]|Exam[]|Test[]|Review[]|null=null
  constructor(
    private subject_Service:SubjectServiceService,
    private summary_Service:SummaryServiceService,
    private test_Service:TestService,
    private exam_Service:ExamServiceService,
    private review_Service:ReviewService,
  ){}
  ngOnInit(): void {
//     const serviceMap = {
//       summary: (subject: SubjectInface) => this.summary_Service.getSummary(subject),
//       reviews: (subject: SubjectInface) => this.review_Service.getReview(subject),
//       tests: (subject: SubjectInface) => this.test_Service.getTest(subject),
//       exams: (subject: SubjectInface) => this.exam_Service.getExam(subject),
//     };
    this.subject_Service.currentContent.subscribe((v)=>{
      if(v){
        this.name=v
      }
    })

// this.subject_Service.currentSubject.subscribe((subject)=>{
//   if(subject){
//     if(this.name==='summary'){
//       serviceMap[this.name](subject).subscribe((S)=>{
//         this.content=S
//       });
//     }
//     else if(this.name==='reviews'){
//       serviceMap[this.name](subject).subscribe((R)=>{
//         this.content=R
//       });
//     }else if(this.name==='tests'){
//       serviceMap[this.name](subject).subscribe((T)=>{
//         this.content=T
//       });
//     }else if(this.name==='exams'){
//       serviceMap[this.name](subject).subscribe((E)=>{
//           this.content=E
//       });
//     }
//   }
//   });

this.subject_Service.allContent.subscribe((cont)=>{
  this.content=cont
})

}
isempty():boolean{
  return (this.content?.length==0)?true:false;
}
}
