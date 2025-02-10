import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../../../service/subject-service.service';
import { DoctorService } from '../../../service/doctor.service';

@Component({
  selector: 'app-notices',
  imports: [],
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.css'
})
export class NoticesComponent implements OnInit{
  date:Date[]=[]
  massege:string=''
 constructor(
  private doctor_service:DoctorService
 ){}
  ngOnInit(): void {
  this.doctor_service.Notices_time.subscribe((time)=>{
    if(time){
      this.date=time
      console.log(time)
    }else{
      this.massege='There are no notifications'
      this.date=[]
    }
  })
}
}
