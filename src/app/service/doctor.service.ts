import { Injectable, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { DoctorData } from '../models/doctor-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DoctorService implements OnInit{
  header={}
   private isDoctor=new BehaviorSubject<boolean>(false);
      private user=new BehaviorSubject<User|undefined>(undefined);

  constructor(
     private userService:UserServiceService,
        private CookieService:CookieService,
            private http:HttpClient,

  ) {
     this.header={Headers:new HttpHeaders({
                      "Content-type":"application/json"
                    })}
  }
  ngOnInit(): void {

  }

setDataUser(user:DoctorData):Observable<DoctorData>{
    return this.http.post<DoctorData>(`${environment.apiUrl}/doctor_data/${user.id}`,user,this.header)
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
}
