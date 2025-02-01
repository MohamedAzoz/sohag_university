import { Injectable, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { StudentData } from '../models/student-data';
import { SubjectInface } from '../models/subject_inface';
import { SubjectServiceService } from './subject-service.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit {
   private isStudent=new BehaviorSubject<boolean>(false);
   private user=new BehaviorSubject<User|undefined>(undefined);
   private studentData=new BehaviorSubject<StudentData|null>(null);
   private subjects=new BehaviorSubject<SubjectInface[]|null>(null);
   public  currentOb:Observable<any>=new Observable<any>(undefined);

  header={}
   constructor(
    private userService:UserServiceService,
    private subject_service:SubjectServiceService,
    private http:HttpClient,
    private CookieService:CookieService,

  ) {
    this.header={Headers:new HttpHeaders({
                  "Content-type":"application/json"
                })}
   }
  ngOnInit(): void {

  }

getDataUsers():Observable<StudentData[]>{
    return this.http.get<StudentData[]>(`${environment.apiUrl}/student_data`)
  }
getDataUser(id:string):Observable<StudentData>{
    return this.http.get<StudentData>(`${environment.apiUrl}/student_data?studentId=${id}`)
  }
DeleteDataUser(users:StudentData):Observable<StudentData>{
      return this.http.delete<StudentData>(`${environment.apiUrl}/student_data/${users.id}`,this.header)
    }
  updateDataUser (users:StudentData):Observable<StudentData>{
    return this.http.patch<StudentData>(`${environment.apiUrl}/student_data/${users.id}`,users,this.header);
  }

  checkStudent(username:string){
    this.userService.getuser(username).subscribe((role)=>{
      let userRole=role.find((user)=>user.username==username && user.role=='student');
      this.isStudent.next(!!userRole);
      this.user.next(userRole);
    })
  }

  isbool():Observable<boolean>{
    return  this.isStudent.asObservable();
  }

user_student():boolean{
  return (this.isStudent.value)?true:false;
}
usercurrent():Observable<User|undefined>{
  return this.user.asObservable();
}

setStudentData(user:User):Observable<SubjectInface[]|null>{
// if(user){
//   this.getDataUser(user.id).subscribe((data)=>{
//     this.currentOb=this.subject_service.getSubjects(data.yearId)
//   });
//   this.currentOb.subscribe((x)=>{
//     this.subjects.next(x);
//   })
// }else{
//    this.subjects.next(null)
// }
return this.subjects.asObservable();
}

getStudentData():Observable<StudentData|null>{
  return this.studentData.asObservable();
}

setSubject(){
//  let currentOb:Observable<any>;

//   this.getStudentData().subscribe((userData)=>{
//     if(userData){
//      currentOb= this.subject_service.getSubjects(userData.yearId)
//     }
//   });

}

get getSubjects():Observable<SubjectInface[]|null>{
  return this.subjects.asObservable()
}

}
