import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationServiceService } from '../../../service/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User = {} as User;
  errorMessage = '';
  constructor(
    private authService: AuthenticationServiceService,
    private router: Router
  ) {}

//============realy databaes========
  /*Login(username: string, password: string): void {
    this.authService.login(username, password);

    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['']);
      } else {
        this.errorMessage = 'خطأ في تسجيل الدخول، تحقق من بياناتك.';
      }
    });
  }*/


// ============fake databaes========

  Login(username: string, password: string): void {
    this.authService.login(username,password);
    this.authService.currentUser.subscribe((user)=>{
      if(user==null){
        this.errorMessage='invalid username or password';
       this.user.username='';
       this.user.password='';
      }
    })
  }
}
