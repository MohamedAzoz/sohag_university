import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppHomeService } from '../../../service/app-home.service';
import { College } from '../../../models/college';
import { RouterLink, RouterModule } from '@angular/router';
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
  private college_service:AppHomeService
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
