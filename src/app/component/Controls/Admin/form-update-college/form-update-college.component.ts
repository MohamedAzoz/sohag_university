import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubjectInface } from '../../../../models/subject_inface';
import { Summary } from '../../../../models/summary';
import { StudentService } from '../../../../service/student.service';
import { SummaryServiceService } from '../../../../service/summary-service.service';
import { College } from '../../../../models/college';
import { CollegeServiceService } from '../../../../service/college-service.service';
import { Department } from '../../../../models/department';

@Component({
  selector: 'app-form-update-college',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-update-college.component.html',
  styleUrl: './form-update-college.component.css'
})
export class FormUpdateCollegeComponent implements OnInit{
  selectFile:File|null=null;
    college:College={} as College
    colleges:College[]=[] as College[]
  departments:Department[]=[] as Department[]
   message!:string;
   collegeid:string='';
   bool:boolean=false;
 select:boolean=false;

   constructor(
    private http:HttpClient,
        private college_service:CollegeServiceService,

   ){}
    ngOnInit(): void {
      this.college_service.getColleges().subscribe((data)=>{
        if(data){
          this.colleges=data;
        }else{
          this.colleges=[]
        }
    });

      }
      selectCollege(id:string){
        this.college_service.getCollege(id).subscribe((data)=>{
          if(data){
            this.college=data;
            this.select=true;
          }else{
            this.select=false;
          }
        })

    }

  onSubmit(college:College){
  this.college_service.updateCollege(college).subscribe((R)=>{
    if(R){
      this.message="been College update successfully";
      this.bool=true;
    }else{
      this.message="error";
      this.bool=false;
    }
  })
  }
}


