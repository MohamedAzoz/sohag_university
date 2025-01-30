import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   private isAdmin=new BehaviorSubject<boolean>(false);

  constructor(
        private userService:UserServiceService,

  ) { }
   checkAdmin(username:string){
      this.userService.getuser(username).subscribe((role)=>{
        let userRole=role.find((user)=>user.username==username && user.role=='admin');
        this.isAdmin.next(!!userRole);
      })
    }
    isbool():Observable<boolean>{
      return  this.isAdmin.asObservable();
    }

  user_admin():boolean{
    return (this.isAdmin.value)?true:false;
  }
}
