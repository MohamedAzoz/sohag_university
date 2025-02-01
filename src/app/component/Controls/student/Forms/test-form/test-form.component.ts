import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../../../service/test.service';
import { Test } from '../../../../../models/test';
import { HttpClient } from '@angular/common/http';
import { SubjectInface } from '../../../../../models/subject_inface';
import { StudentService } from '../../../../../service/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.css'
})
export class TestFormComponent implements OnInit{
  test!:Test
   selectFile:File|null=null;
   subjects!:SubjectInface[]|null
   message!:string;

    constructor(
     private http:HttpClient,
     private test_service:TestService,
     private student_service:StudentService
    ){}
     ngOnInit(): void {
        // this.student_service.setStudentData();
        // this.student_service.setSubject();
        // this.student_service.getSubjects().subscribe((sub)=>{
        //  if(sub){
        //    this.subjects=sub;
        //  }else{
        //    this.subjects=null;
        //  }
        // })

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
   this.test_service.AddTest(this.test).subscribe((R)=>{
     if(R){
       this.message="been exam add successfully";
     }else{
       this.message="error"
     }
   })
   }
 }

