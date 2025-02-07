import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubjectInface } from '../../../../models/subject_inface';
import { Summary } from '../../../../models/summary';
import { StudentService } from '../../../../service/student.service';
import { SummaryServiceService } from '../../../../service/summary-service.service';
import { User } from '../../../../models/user';
import { UserServiceService } from '../../../../service/user-service.service';

@Component({
  selector: 'app-form-add-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-add-user.component.html',
  styleUrl: './form-add-user.component.css'
})
export class FormAddUserComponent implements OnInit{
 user:User={} as User
  selectFile:File|null=null;
  subjects!:SubjectInface[]|null
  message!:string;
bool:boolean=false
   constructor(
    private http:HttpClient,
    private summary_service:UserServiceService,
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
  this.summary_service.adduser(this.user).subscribe((R)=>{
    if(R){
      this.message="been Your add successfully";
      this.bool=true;
    }else{
      this.message="error";
      this.bool=false;
    }
  })
  }
}


