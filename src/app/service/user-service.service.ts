import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnInit {
header={}
  constructor(
    private http:HttpClient,
        private CookieService:CookieService,

  ) {

        this.header={Headers:new HttpHeaders({
              "Content-type":"application/json"
            })}
   }
  ngOnInit(): void {

  }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/users`)
  }
  getuser(role:string):Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/users?username=${role}`)
  }
  getuserone(username:string):Observable<User>{
    return this.http.get<User>(`${environment.apiUrl}/users?username=${username}`)
  }
DeleteUser(users:User):Observable<User>{
      return this.http.delete<User>(`${environment.apiUrl}/users/${users.id}`,this.header)
    }
  updateUser (users:User):Observable<User>{
    return this.http.patch<User>(`${environment.apiUrl}/users/${users.id}`,users,this.header);
  }
  updatePassword(users:User):Observable<User>{
    return this.http.patch<User>(`${environment.apiUrl}/users/${users.id}`,users,this.header);
  }

}
