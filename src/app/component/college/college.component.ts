import { Component, OnInit } from '@angular/core';
import { CollegeServiceService } from '../../service/college-service.service';
import { Department } from '../../models/department';
import { College } from '../../models/college';
import { ActivatedRoute } from '@angular/router';
import { SubjectComponent } from '../subject/subject.component';
import { YearComponentimplements } from "../year/year.component";
import { SubjectContentComponent } from "../subject-content/subject-content.component";
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-college',
  imports: [SubjectComponent, YearComponentimplements, SubjectContentComponent,ContentComponent],
  templateUrl: './college.component.html',
  styleUrl: './college.component.css'
})

export class CollegeComponent implements OnInit {
  departments!:Department[];
  college!:College;
  constructor(
    private college_Service:CollegeServiceService,
    private acriva:ActivatedRoute
  ){
  }
  ngOnInit() {
    this.acriva.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getCollegeData(id);
      }
    });
  }

  getCollegeData(id: string) {
    this.college_Service.getColleges().subscribe((value)=>{
      let data=value.find((college)=>(college.id=id))
        if (data) {
          this.college = data;
        } else {
          console.error('College data is null');
        }

  });
  }



  setDepartment(depart:Department){
    this.college_Service.setDepartment(depart)
    console.log("secsse");

  }

}
