import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TestService } from '../../../../../service/test.service';
import { Test } from '../../../../../models/test';
import { User } from '../../../../../models/user';
import { StudentService } from '../../../../../service/student.service';

@Component({
  selector: 'app-test-home',
  imports: [RouterLink],
  templateUrl: './test-home.component.html',
  styleUrl: './test-home.component.css'
})
export class TestHomeComponent implements OnInit{
  tests!:Test[]
  student:User={} as User
constructor(
  private test_service:TestService,
    private student_service:StudentService

){}
  ngOnInit(): void {
    this.student_service.usercurrent().subscribe((ST)=>{
      if(ST){
        this.student=ST
      }
    })
    this.test_service.getTestByStudentId(this.student).subscribe((R)=>{
      if(R){
        this.tests=R
      }
    })
  }
}
