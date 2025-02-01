import { Component, OnInit } from '@angular/core';
import { Exam } from '../../../../../models/exam';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment.development';
import { ExamServiceService } from '../../../../../service/exam-service.service';
import { SubjectServiceService } from '../../../../../service/subject-service.service';
import { StudentService } from '../../../../../service/student.service';
import { SubjectInface } from '../../../../../models/subject_inface';
import { BehaviorSubject, Observable } from 'rxjs';
import { StudentData } from '../../../../../models/student-data';
import { User } from '../../../../../models/user';

@Component({
  selector: 'app-exam-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './exam-form.component.html',
  styleUrl: './exam-form.component.css'
})
export class ExamFormComponent implements OnInit{

     private userCurrent=new BehaviorSubject<User|undefined>(undefined);
  private studentData=new BehaviorSubject<StudentData|null>(null);
     private subjectsAll=new Observable<SubjectInface[]|null>(undefined);

  exam:Exam={} as Exam
  selectFile:File|null=null;
  subjects!:SubjectInface[]|null
  message!:string;
  bool!:boolean;
 constructor(
  private http:HttpClient,
  private exam_service:ExamServiceService,
  private subject_service:SubjectServiceService,
  private student_service:StudentService
 ){}
  ngOnInit(): void {
    //  this.student_service.setStudentData();
    //  this.student_service.setSubject();
    //  this.student_service.getSubjects.subscribe((sub)=>{
    //     this.subjects=sub ?? null;
    //  })
    let bool=this.student_service.user_student()
    if(bool){
      this.student_service.usercurrent().subscribe((ST)=>{
        if(ST){
          this.subjectsAll=this.student_service.setStudentData(ST)

        }
      })

      this.subjectsAll.subscribe((sub)=>{
        this.subjects=sub
      })
    }


    // this.student_service.usercurrent().subscribe((user)=>{
    //     this.userCurrent.next(user);
    // });

    // if(this.userCurrent.value){
    //   this.student_service.getDataUser(this.userCurrent.value.id).subscribe((ST)=>{
    //     this.studentData.next(ST);
    //   })
    // }else{
    //   this.studentData.next(null);
    // }
    // let userData=this.studentData.value;
    // if(userData){
    //   this.subject_service.getSubjects(userData.yearId).subscribe((sub)=>{
    //     this.subjects=sub;
    //   })
    // }else{
    //   this.subjects=null;
    // }
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
  if(this.exam){
    this.exam_service.AddExam(this.exam).subscribe((ex)=>{
        this.bool=!!ex;
    })
  }
}
}
