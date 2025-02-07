import { Component, OnInit } from '@angular/core';
import { Department } from '../../../../models/department';
import { College } from '../../../../models/college';
import { HttpClient } from '@angular/common/http';
import { CollegeServiceService } from '../../../../service/college-service.service';
import { StudentService } from '../../../../service/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-delete-department',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-delete-department.component.html',
  styleUrl: './form-delete-department.component.css'
})
export class FormDeleteDepartmentComponent implements OnInit{
  depart:Department={} as Department
  selectFile:File|null=null;
  colleges:College[]=[] as College[]
  departments:Department[]=[] as Department[]
  message!:string;
  collegeid:string='';
  bool:boolean=false;
select:boolean=false;
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
      selectCollege(id:string){
          this.college_service.getDepartments(id).subscribe((data)=>{
            if(data){
              this.departments=data;
              this.select=true;
            }else{
              this.departments=[];
              this.select=false;
            }
          })
      }

      DeleteDepartment(department:Department){
        this.college_service.DeleteDepartment(department).subscribe((value)=>{
          if(value){
            this.message="been Your Delete successfully";
            this.bool=true;
          }else{
            this.message="error in Delete";
            this.bool=false;
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
  //      this.http.post(`${environment.apiUrl}/review/`,dataForm).subscribe((response)=>{
  //       console.log("تم رفع الا متحان",response);
  //      })

  //       }
  //   }
  // onSubmit(){
  // this.college_service.AddYear(this.year).subscribe((R)=>{
  //   if(R){
  //     this.message="been Year add successfully";
  //     this.bool=true;
  //   }else{
  //     this.message="error in Add";
  //     this.bool=false;
  //   }
  // })
  // }
}


