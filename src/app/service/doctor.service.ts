import { Injectable, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService implements OnInit{
   private isDoctor=new BehaviorSubject<boolean>(false);
  constructor(
     private userService:UserServiceService,
        private CookieService:CookieService
  ) { }
  ngOnInit(): void {

  }
  checkStudent(username:string){
      this.userService.getuser(username).subscribe((role)=>{
        let userRole=role.find((user)=>user.username==username && user.role=='doctor');
        this.isDoctor.next(!!userRole);
      })
    }
    isbool():Observable<boolean>{
      return  this.isDoctor.asObservable();
    }
  user_doctor():boolean{
    return (this.isDoctor.value)?true:false;
  }
}
