import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { College } from '../../../../models/college';
import { Department } from '../../../../models/department';
import { CollegeServiceService } from '../../../../service/college-service.service';
import { StudentService } from '../../../../service/student.service';
import { Year } from '../../../../models/year';

@Component({
  selector: 'app-form-add-year',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-add-year.component.html',
  styleUrl: './form-add-year.component.css'
})
export class FormAddYearComponent implements OnInit{
  year:Year={} as Year
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
  this.college_service.AddYear(this.year).subscribe((R)=>{
    if(R){
      this.message="been Your add successfully";
      this.bool=true;
    }else{
      this.message="error in Add";
      this.bool=false;
    }
  })
  }
}


