import { Injectable, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { DoctorData } from '../models/doctor-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { CollegeServiceService } from './college-service.service';
import { Year } from '../models/year';
import { College } from '../models/college';
import { Department } from '../models/department';
import { SubjectInface } from '../models/subject_inface';
import { SubjectServiceService } from './subject-service.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService implements OnInit{
  subject_doctor:SubjectInface[]=[]
  year_doctor:Year[]=[]
  Depart_doctor:Department[]=[]
  colleges:College[]=[]
  header={}
   private isDoctor=new BehaviorSubject<boolean>(false);
      private user=new BehaviorSubject<User|undefined>(undefined);
private doctorData=new BehaviorSubject<DoctorData|undefined>(undefined);
   userData=this.doctorData.asObservable();

   private yearsBehavior=new BehaviorSubject<Year[]|undefined>(undefined);
   years_dotor=this.yearsBehavior.asObservable();

   private DepartsBehavior=new BehaviorSubject<Department[]|undefined>(undefined);
   Departs_doctor=this.DepartsBehavior.asObservable();

   private collegesBehavior=new BehaviorSubject<College[]|undefined>(undefined);
   colleges_dotor=this.collegesBehavior.asObservable();

   private subjectsBehavior=new BehaviorSubject<SubjectInface[]|undefined>(undefined);
   subjects_dotor=this.subjectsBehavior.asObservable();

    private onesubjectBehavior=new BehaviorSubject<SubjectInface|undefined>(undefined);
           onesubject=this.onesubjectBehavior.asObservable();

   private NoticeseBehavior=new BehaviorSubject<Date[]|undefined>(undefined);
    Notices_time=this.NoticeseBehavior.asObservable();

  constructor(
     private userService:UserServiceService,
        private college_service:CollegeServiceService,
        private subject_service:SubjectServiceService,
            private http:HttpClient,

  ) {
     this.header={Headers:new HttpHeaders({
                      "Content-type":"application/json"
                    })}
  }
  ngOnInit(): void {

  }

setDataUser(user:DoctorData):Observable<DoctorData>{
    return this.http.post<DoctorData>(`${environment.apiUrl}/doctor_data`,user,this.header)
  }

getDataUsers():Observable<DoctorData[]>{
    return this.http.get<DoctorData[]>(`${environment.apiUrl}/doctor_data`)
  }

getDataUser(id:string):Observable<DoctorData>{
    return this.http.get<DoctorData>(`${environment.apiUrl}/doctor_data?doctorId=${id}`)
  }

DeleteDataUser(users:DoctorData):Observable<DoctorData>{
      return this.http.delete<DoctorData>(`${environment.apiUrl}/doctor_data/${users.id}`,this.header)
    }

updateDataUser (users:DoctorData):Observable<DoctorData>{
     return this.http.patch<DoctorData>(`${environment.apiUrl}/doctor_data/${users.id}`,users,this.header);
  }
  checkDoctor(username:string){
      this.userService.getuser(username).subscribe((role)=>{
        let userRole=role.find((user)=>user.username==username && user.role=='doctor');
        this.isDoctor.next(!!userRole);
        this.user.next(userRole);
      })
    }
    isbool():Observable<boolean>{
      return  this.isDoctor.asObservable();
    }
  user_doctor():boolean{
    return (this.isDoctor.value)?true:false;
  }
  usercurrent():Observable<User|undefined>{
    return this.user.asObservable();
  }

  setDoctor(user:User){
     this.getDataUsers().subscribe((data)=>{
      let us=data.find((v)=>(v.doctorId==user.id))
      if(us){
        this.doctorData.next(us)
      }else{
        this.doctorData.next(undefined);
      }
    })
  }
getcolleges(colleges:string[]){
    for(let i =0; i < colleges.length; i++) {
      this.college_service.getColleges().subscribe((data)=>{
        let college=data.find((v)=>v.id==colleges[i])
        if(college){
         let bool=this.colleges.find((b)=>b.id==college.id)
          if(!bool){
            this.colleges.push(college)
             this.collegesBehavior.next(this.colleges);
          }
        }
      })
    }
  }
  getDepartments(Departs:string[]){
    for(let i =0; i < Departs.length; i++) {
      this.college_service.getDepartment_Doctor().subscribe((data)=>{
        let Depart=data.find((v)=>v.id==Departs[i])
        if(Depart){
         let bool=this.Depart_doctor.find((b)=>b.id==Depart.id)
          if(!bool){
            this.Depart_doctor.push(Depart)
             this.DepartsBehavior.next(this.Depart_doctor);
          }
        }
      })
    }
  }
  getyears(years:string[]){
    for(let i =0; i < years.length; i++) {
      this.college_service.getYears_Doctor().subscribe((data)=>{
        let year=data.find((v)=>v.id==years[i])
        if(year){
         let bool=this.year_doctor.find((b)=>b.id==year.id)
          if(!bool){
            this.year_doctor.push(year)
             this.yearsBehavior.next(this.year_doctor);
          }
        }
      })
    }
  }
  getsubjects(subjects:string[]){
    for(let i =0; i < subjects.length; i++) {
      this.subject_service.getSubject_Doctor().subscribe((data)=>{
        let subject=data.find((v)=>v.id==subjects[i])
        if(subject){
         let bool=this.subject_doctor.find((b)=>b.id==subject.id)
          if(!bool){
            this.subject_doctor.push(subject)
             this.subjectsBehavior.next(this.subject_doctor);
          }
        }
      })
    }
  }
  // selectSubject(id:string){
  //   this.subjects_dotor.subscribe((Subjects)=>{
  //     if(Subjects){
  //      let Subject=Subjects.find((sub)=>(sub.id==id));
  //      if(Subject){
  //       // this.select=true
  //       this.onesubjectBehavior.next(Subject)
  //      }else{
  //       this.onesubjectBehavior.next(undefined)
  //       // this.select=false
  //      }
  //    }
  //   })
  //   }
  //   selectContent(value:string){
  //     this.onesubject.subscribe((subject)=>{
  //       if(subject){
  //         // this.typContent=value
  //         console.log(subject,value);
  //         // this.contentBehavior.next(value);
  //         this.subject_service.setContent_Doctor(value,subject)
  //        this.subject_service.allContent.subscribe((data)=>{
  //       if(data && data.length>0){
  //         // console.log(data);
  //         // this.bool=true;
  //         // this.content=data;
  //       }else{
  //         // this.bool=false;
  //         // this.content=[];
  //       }
  //     });
  //   }
  //     });

  //   }
  Time_for_Subject(time:Date){

    let date:any;
    date.push(time);
    this.NoticeseBehavior.next(date)
   }
}
