import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { DoctorData } from '../../../../models/doctor-data';
import { Year } from '../../../../models/year';
import { DoctorService } from '../../../../service/doctor.service';
import { ExamServiceService } from '../../../../service/exam-service.service';

@Component({
  selector: 'app-delete-manager-by-doctor',
  imports: [],
  templateUrl: './delete-manager-by-doctor.component.html',
  styleUrl: './delete-manager-by-doctor.component.css'
})
export class DeleteManagerByDoctorComponent implements OnInit {
  content:string='';
  userData:User={} as User;
  years:Year[]=[]
  doctor:DoctorData={} as DoctorData;
constructor(
private exam_service:ExamServiceService,
private doctor_service:DoctorService
){}
  ngOnInit(): void {
    this.doctor_service.usercurrent().subscribe((data)=>{
      if(data){
        this.doctor_service.setDoctor(data)
        // console.log("usercurrent ",data);

      }
    })
    this.doctor_service.userData.subscribe((data)=>{
      if(data){
        this.doctor_service.getyears(data.yearsId)
        // console.log("userData  ",data);

      }
    })
    this.doctor_service.years_dotor.subscribe((year)=>{
      if(year){
        this.years=year
        // console.log("years_dotor   ",year);

      }
    })

  }
selecteontent(name:string){
  this.content=name
}
clickExam(id:string){
this.doctor_service
}

}
