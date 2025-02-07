import { Component, AfterViewInit, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { CollegeServiceService } from '../../../service/college-service.service';
import { College } from '../../../models/college';
declare const bootstrap: any;

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit ,OnInit{
  colleges:College[]=[]
  constructor(
    private college_service:CollegeServiceService
  ){}
  ngOnInit(): void {
    this.college_service.getColleges().subscribe((data)=>{
      this.colleges=data;
    })
  }

  ngAfterViewInit(): void {
    // ScrollSpy
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#nav',
    });

  }
}
