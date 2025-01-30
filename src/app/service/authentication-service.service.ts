import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user';
import { UserServiceService } from './user-service.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  // private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  // public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private currentUserSubject=new BehaviorSubject<User | null>(null);
  public currentUser=this.currentUserSubject.asObservable();

  constructor(
    // private Http:HttpClient,
    private router:Router,
    private CookieService:CookieService,
    private users:UserServiceService
  ) {
  }

//============realy databaes========
  /*login(username: string, password: string): void{
     this.Http.post<{ token: string }>(`${environment.apiUrl}/login`, { username, password }).subscribe(
      (response) => {
        this.CookieService.set('authToken', response.token);
        this.isLoggedInSubject.next(true);
      });
  }


  logout(): void {
    this.CookieService.delete('authToken');
    this.isLoggedInSubject.next(false);
  }

  checkLoginStatus(): void {
    const token = this.CookieService.get('authToken');
    if (token) {
      this.isLoggedInSubject.next(true);
    } else {
      this.isLoggedInSubject.next(false);
    }
  }*/


//============fake databaes========
  login(username:string,password:string):void{
    this.users.getUsers().subscribe((data)=>{
        let user=data.find((value)=>(value.username==username  && value.password==password))
    if(user){
      this.router.navigate(['/Dashboard']);
      this.currentUserSubject.next(user);
      this.CookieService.set("token",user.username);
    }else{
      this.currentUserSubject.next(null);
    }
    })
  }

  getCurrentUser():User |null{
   return this.currentUserSubject.value;
  }

  logout():void{
    this.currentUserSubject.next(null);
    this.CookieService.delete("token");
  }
  
isAuthenticated():boolean{
  return (this.currentUserSubject.value)?true:false;
}


}
