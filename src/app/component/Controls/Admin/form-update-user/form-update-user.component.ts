import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../../../service/student.service';
import { Observable } from 'rxjs';
import { College } from '../../../../models/college';
import { Department } from '../../../../models/department';
import { DoctorData } from '../../../../models/doctor-data';
import { StudentData } from '../../../../models/student-data';
import { User } from '../../../../models/user';
import { Year } from '../../../../models/year';
import { CollegeServiceService } from '../../../../service/college-service.service';
import { DoctorService } from '../../../../service/doctor.service';
import { UserServiceService } from '../../../../service/user-service.service';

@Component({
  selector: 'app-form-update-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-update-user.component.html',
  styleUrl: './form-update-user.component.css'
})
export class FormUpdateUserComponent implements OnInit{
  user:User={} as User
  studentData:StudentData={} as StudentData;
  doctorData:DoctorData={}as DoctorData;
  data:StudentData|DoctorData={} as StudentData|DoctorData;
  colleges:College[]=[]
  departments:Department[]=[];
  years:Year[]=[]
 message!:string;
 collegeid:string='';
 Departmentid:string='';
 select1:boolean=false
 select2:boolean=false
 bool:boolean=false
 bool1:boolean=false
 bool2:boolean=false
    constructor(
     private user_service:UserServiceService,
     private student_service:StudentService,
     private college_service:CollegeServiceService,
     private doctor_service:DoctorService,
     private location:Location
    ){}
     ngOnInit(): void {
       this.college_service.getColleges().subscribe((data)=>{
         if(data){
           this.colleges=data
         }else{
           this.colleges=[]
         }
     });


 }
 selecteontent(role:string){
   if(role=='student'){
     this.user.role='student'
   }if(role=='doctor'){
     this.user.role='doctor'
   }

 }

 selectCollege(id:string){
 this.college_service.getDepartments(id).subscribe((data)=>{
 if(data){
 this.departments=data;
 this.select1=true;
 }else{
 this.departments=[];
 this.select1=false;
 }
 })
 }
 selectDepartment(id:string){
   this.college_service.getYears(id).subscribe((data)=>{
     if(data){
       this.years=data;
       this.select2=true;
     }else{
       this.select2=false;
     }
   })
 }

 onSubmit(US: User) {
   let ObRole: Observable<any> = new Observable();

   this.user_service.adduser(US).subscribe((R) => {
     if (R) {
       this.bool1 = true;
           if (R.role === 'student') {
             this.studentData.studentId=R.id
             ObRole = this.student_service.setDataUser(this.studentData);
           } else if (R.role === 'doctor') {
             this.doctorData.doctorId=R.id
             ObRole = this.doctor_service.setDataUser(this.doctorData);
           }
           ObRole.subscribe((res) => {
             this.bool2 = !!res;
             this.check();
           });
     } else {
       this.bool1 = false;
       this.check();
     }
   });
 }

 check() {
   if (this.bool1 && this.bool2) {
     this.bool = true;
     this.message = "User has been updated successfully.";
   } else {
     this.bool = false;
     this.message = "Error occurred.";
   }
 }
 back(){
   this.location.back();
 }

 }
