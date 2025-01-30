import { Injectable, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { StudentData } from '../models/student-data';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit {
   private isStudent=new BehaviorSubject<boolean>(false);
   private user=new BehaviorSubject<User|undefined>(undefined);
  header={}
   constructor(
    private userService:UserServiceService,
    private http:HttpClient
  ) {
    this.header={Headers:new HttpHeaders({
                  "Content-type":"application/json"
                })}
   }
  ngOnInit(): void {

  }

getUsers():Observable<StudentData[]>{
    return this.http.get<StudentData[]>(`${environment.apiUrl}/users`)
  }
DeleteUser(users:StudentData):Observable<StudentData>{
      return this.http.delete<StudentData>(`${environment.apiUrl}/users/${users.id}`,this.header)
    }
  updateUser (users:StudentData):Observable<StudentData>{
    return this.http.patch<StudentData>(`${environment.apiUrl}/users/${users.id}`,users,this.header);
  }

  checkStudent(username:string){
    this.userService.getuser(username).subscribe((role)=>{
      let userRole=role.find((user)=>user.username==username && user.role=='student');
      this.isStudent.next(!!userRole);
      this.user.next(userRole);
    })
  }

  usercurrent():Observable<User|undefined>{
    return this.user.asObservable();
  }

  isbool():Observable<boolean>{
    return  this.isStudent.asObservable();
  }

user_student():boolean{
  return (this.isStudent.value)?true:false;
}
}
