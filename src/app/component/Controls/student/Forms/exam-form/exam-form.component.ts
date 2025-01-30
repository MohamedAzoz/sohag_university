import { Component, OnInit } from '@angular/core';
import { Exam } from '../../../../../models/exam';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment.development';
import { ExamServiceService } from '../../../../../service/exam-service.service';
import { SubjectServiceService } from '../../../../../service/subject-service.service';
import { StudentService } from '../../../../../service/student.service';

@Component({
  selector: 'app-exam-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './exam-form.component.html',
  styleUrl: './exam-form.component.css'
})
export class ExamFormComponent implements OnInit{
  exam!:Exam
  selectFile:File|null=null;
  subjects!:any[]
  message!:string;
  exams!:Exam[]
 constructor(
  private http:HttpClient,
  private exam_service:ExamServiceService,
  private subject_service:SubjectServiceService,
  private student_service:StudentService
 ){}
  ngOnInit(): void {
   this.student_service.usercurrent().subscribe((ST)=>{
if(ST){

  //  this.subject_service.getSubjects()
}
    })
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

onSubmit(){
this.exam_service.AddExam(this.exam).subscribe((ex)=>{
  if(ex){
    this.message="been exam add successfully";
  }else{
    this.message="error"
  }
})
}
}
