import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../../service/subject-service.service';
import { ActivatedRoute } from '@angular/router';
import { SummaryServiceService } from '../../service/summary-service.service';
import { Summary } from '../../models/summary';
import { Exam } from '../../models/exam';
import { Test } from '../../models/test';
import { Review } from '../../models/review';
import { TestService } from '../../service/test.service';
import { ExamServiceService } from '../../service/exam-service.service';
import { ReviewService } from '../../service/review.service';

@Component({
  selector: 'app-subject-content',
  imports: [],
  templateUrl: './subject-content.component.html',
  styleUrl: './subject-content.component.css'
})
export class SubjectContentComponent implements OnInit {
  summarys:string="summarys"
  reviews:string="reviews"
  exams:string="exams"
  tests:string="tests"
  id!:string|null
  data_summarys!:Summary[]|null
  data_exam!:Exam[]|null
  data_test!:Test[]|null
  data_review!:Review[]|null
  // Sum!:any[]|null;
  name!:string;
  constructor(
    private subject_Service:SubjectServiceService,
    private summary_Service:SummaryServiceService,
    private test_Service:TestService,
    private exam_Service:ExamServiceService,
    private review_Service:ReviewService,
    private activa:ActivatedRoute
  ){
  }
  ngOnInit(): void {
    // this.cont=this.subject_Service.getSubject

this.activa.paramMap.subscribe((Id)=>{
  this.id=Id.get('id')
});
    this.subject_Service.currentSubject.subscribe((subject)=>{
      if(subject){
        this.name=subject.name
  //   this.summary_Service.getSummary(subject).subscribe((S)=>{
  //     this.data_summarys=S
  //   });
  //   this.review_Service.getReview(subject).subscribe((R)=>{
  //     this.data_review=R
  //   });
  //  this.test_Service.getTest(subject).subscribe((T)=>{
  //   this.data_test=T
  //  });
  //  this.exam_Service.getExam(subject).subscribe((E)=>{
  //   this.data_exam=E
  //  })
  }
  else{
    // this.data_summarys=null;
    // this.data_test=null;
    // this.data_exam=null;
    // this.data_review=null;
    console.log("Error in get content subject");
  }
  // this.Sum?.concat(this.test,this.exam,this.summary,this.review)

 });
}
  isBoolen():boolean{
      if(this.subject_Service.getBoolen==true){
        return true;
      }else{
        return false;
      }

  }
  setContent(value:string){
    console.log(value);
    this.subject_Service.setContent(value)
  }
}
