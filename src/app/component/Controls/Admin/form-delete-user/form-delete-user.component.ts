import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { UserServiceService } from '../../../../service/user-service.service';

@Component({
  selector: 'app-form-delete-user',
  imports: [],
  templateUrl: './form-delete-user.component.html',
  styleUrl: './form-delete-user.component.css'
})
export class FormDeleteUserComponent implements OnInit{
  users:User[]=[];
  bool:boolean=false;
  bool1:boolean=false;
  bool2:boolean=false;
  message:string='';
constructor(
      private user_service:UserServiceService,

){
}
  ngOnInit(): void {

  }
  selecteRole(role:string){
    this.user_service.getUsers().subscribe((data)=>{
      this.users=data.filter((value)=>(value.role===role));
      this.bool1=true;
     })
  }
  DeleteCollege(user:User){
    if(confirm("sure this delete")){
      this.user_service.DeleteUser(user).subscribe((value)=>{
      if(value){
        this.bool1=false;
        this.message="been Year Delete successfully";
        this.bool2=true;
      }else{
        this.message="error in Delete";
        this.bool2=false;
      }
    })
  }
  }
}

