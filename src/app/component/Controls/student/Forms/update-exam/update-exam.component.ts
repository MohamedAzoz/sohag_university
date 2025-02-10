import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Exam } from '../../../../../models/exam';
import { StudentData } from '../../../../../models/student-data';
import { SubjectInface } from '../../../../../models/subject_inface';
import { User } from '../../../../../models/user';
import { ExamServiceService } from '../../../../../service/exam-service.service';
import { StudentService } from '../../../../../service/student.service';
import { SubjectServiceService } from '../../../../../service/subject-service.service';

@Component({
  selector: 'app-update-exam',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-exam.component.html',
  styleUrl: './update-exam.component.css'
})
export class UpdateExamComponent implements OnInit{
  exam:Exam={} as Exam;
  exams:Exam[]=[] as Exam[]
  selectFile:File|null=null;
  subjects!:SubjectInface[]|null
  message!:string;
  bool:boolean=false;
  bool2:boolean=false;
 constructor(
  private http:HttpClient,
  private exam_service:ExamServiceService,
  private subject_service:SubjectServiceService,
  private student_service:StudentService
  ,private location:Location
 ){}
  ngOnInit(): void {
this.exam_service.currentExam.subscribe((data)=>{
  if(data){
    this.exam=data;
  }
})
    }
    back(){
      this.location.back();
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
//      this.http.post(`${environment.apiUrl}/exam/`,dataForm).subscribe((response)=>{
//       console.log("تم رفع الا متحان",response);
//      })

//       }
//   }

onSubmit(exam:Exam){
    this.exam_service.updateExam(exam).subscribe((Value)=>{
      if(Value){
        this.message="been Your Update successfully";
        this.bool=true;
      }else{
        this.message="error in Update";
        this.bool=false;
      }
    })
}
}
