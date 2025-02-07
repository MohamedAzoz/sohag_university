import { Injectable, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { StudentData } from '../models/student-data';
import { SubjectInface } from '../models/subject_inface';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit {
   private isStudent=new BehaviorSubject<boolean>(false);
   private user=new BehaviorSubject<User|undefined>(undefined);
   private studentData=new BehaviorSubject<StudentData|undefined>(undefined);
   userData=this.studentData.asObservable();

  header={}
   constructor(
    private userService:UserServiceService,
    private http:HttpClient,

  ) {
    this.header={Headers:new HttpHeaders({
                "Content-type":"application/json"
            })}
   }
  ngOnInit(): void {

  }
  setDataUser(user:StudentData):Observable<StudentData>{
    return this.http.post<StudentData>(`${environment.apiUrl}/student_data/${user.id}`,user,this.header)
  }
getDataUsers():Observable<StudentData[]>{
    return this.http.get<StudentData[]>(`${environment.apiUrl}/student_data`)
  }
// getDataUser(id:string):Observable<StudentData>{
//     return this.http.get<StudentData>(`${environment.apiUrl}/student_data?studentId=${id}`)
//   }
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

setuser(user:User){
   this.getDataUsers().subscribe((data)=>{
    let us=data.find((v)=>(v.studentId==user.id))
    if(us){
      this.studentData.next(us)
    }else{
      this.studentData.next(undefined);
    }
  })
}

}
