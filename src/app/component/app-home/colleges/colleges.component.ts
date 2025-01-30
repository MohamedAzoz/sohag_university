import { AfterViewInit, Component, OnInit } from '@angular/core';
import { College } from '../../../models/college';
import { RouterModule } from '@angular/router';
import { CollegeServiceService } from '../../../service/college-service.service';
declare const bootstrap: any;


@Component({
  selector: 'app-colleges',
  imports: [RouterModule],
  templateUrl: './colleges.component.html',
  styleUrl: './colleges.component.css'
})
export class CollegesComponent implements OnInit , AfterViewInit{
colleges!:College[]
constructor(
  private college_service:CollegeServiceService
){}
ngOnInit(): void {
  this.college_service.getColleges().subscribe((data)=>{
    this.colleges=data
  })
}
ngAfterViewInit(): void {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = Array.from(tooltipTriggerList).map(
    tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
  );
}
}
