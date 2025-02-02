import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../../../service/user-service.service';
import { User } from '../../../models/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-update-your-data',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-update-your-data.component.html',
  styleUrl: './form-update-your-data.component.css'
})
export class FormUpdateYourDataComponent implements OnInit{
user: User = {} as User;
userdata: User = {} as User;
password1:string='';
password2:string='';
  errorMessage = '';
  bool:boolean=false;
  constructor(
    private userService: UserServiceService,
    private CookieService:CookieService,
    private router: Router
  ) {}
  ngOnInit(): void {

  }
  updatePassword(pass:string,password1:string,password2:string){
    let username= this.CookieService.get('token');
    if(username){
      this.userService.getuserone(username).subscribe((data)=>{
         if(pass==data.password && password1==password2 && (password1.trim()||password2.trim()!='')){
          this.user.password=password1;
          this.userService.updatePassword(this.user).subscribe((us)=>{
            if(us){
              this.bool=true;
            }else{
              this.bool=false;
            }
          })
        }
      })
    }else{
      console.log("error in update password");

    }
  }
}
