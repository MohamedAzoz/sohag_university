import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubjectInface } from '../../../../models/subject_inface';
import { StudentService } from '../../../../service/student.service';
import { CollegeServiceService } from '../../../../service/college-service.service';
import { College } from '../../../../models/college';
import { Department } from '../../../../models/department';

@Component({
  selector: 'app-form-add-department',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-add-department.component.html',
  styleUrl: './form-add-department.component.css'
})
export class FormAddDepartmentComponent implements OnInit{
  department:Department={} as Department
  selectFile:File|null=null;
  colleges:College[]=[] as College[]
  message!:string;
  bool:boolean=false;

   constructor(
    private http:HttpClient,
    private college_service:CollegeServiceService,
    private student_service:StudentService
   ){

   }
    ngOnInit(): void {

          this.college_service.getColleges().subscribe((data)=>{
                      if(data){
                        this.colleges=data
                      }else{
                        this.colleges=[]
                      }
                  });
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
  this.college_service.AddDepartment(this.department).subscribe((R)=>{
    if(R){
      this.message="been Department add successfully";
      this.bool=true;
    }else{
      this.message="error in Add";
      this.bool=false;
    }
  })
  }
}


