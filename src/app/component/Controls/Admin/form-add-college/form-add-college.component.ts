import { Summary } from './../../../../models/summary';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../../../service/student.service';
import { SummaryServiceService } from '../../../../service/summary-service.service';
import { SubjectInface } from '../../../../models/subject_inface';
import { College } from '../../../../models/college';
import { CollegeServiceService } from '../../../../service/college-service.service';

@Component({
  selector: 'app-form-add-college',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-add-college.component.html',
  styleUrl: './form-add-college.component.css'
})
export class FormAddCollegeComponent implements OnInit{
  college:College={} as College
  selectFile:File|null=null;
  message!:string;
  bool:boolean=false;

   constructor(
    private http:HttpClient,
    private college_service:CollegeServiceService,
    private student_service:StudentService
   ){

   }
    ngOnInit(): void {
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
  this.college_service.AddCollege(this.college).subscribe((R)=>{
    if(R){
      this.message="been College add successfully";
      this.bool=true;
    }else{
      this.message="error in Add";
      this.bool=false;
    }
  })
  }
}
