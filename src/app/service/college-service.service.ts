import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { College } from '../models/college';
import { environment } from '../../environments/environment.development';
import { Department } from '../models/department';
import { Year } from '../models/year';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CollegeServiceService {
  header={}
 private department=new BehaviorSubject<Department|null>(null);
 currentDepartment:Observable<Department|null>=this.department.asObservable();
  constructor(
    private http:HttpClient,
    private acriva:ActivatedRoute

  ) {
    this.header={Headers:new HttpHeaders({
      "Content-type":"application/json"
    })}
  }



  //=============== College  Service ==============
  getColleges():Observable<College[]>{
    return this.http.get<College[]>(`${environment.apiUrl}/college`);
  }
  getCollege(Id:string):Observable<College>{
    return this.http.get<College>(`${environment.apiUrl}/college/${Id}`);
  }
  AddCollege(colleg:College):Observable<College>{
    return this.http.post<College>(`${environment.apiUrl}/college`,colleg,this.header);
  }
  DeleteCollege(college:College):Observable<College>{
    return this.http.delete<College>(`${environment.apiUrl}/college/${college.id}`,this.header);
  }


  //================ Departments  Service =====================
  getDepartments(id:string):Observable<Department[]>{
    return this.http.get<Department[]>(`${environment.apiUrl}/department?collegeId=${id}`);
  }
  AddDepartment(department:Department):Observable<Department>{
    return this.http.post<Department>(`${environment.apiUrl}/department`,department,this.header);
  }
  DeleteDepartment(department:Department):Observable<Department>{
    return this.http.delete<Department>(`${environment.apiUrl}/department/${department.id}`,this.header)
  }

  //================= Year  Service===================
  getYears(department:Department):Observable<Year[]>{
    return this.http.get<Year[]>(`${environment.apiUrl}/year?departmentId=${department.id}`,this.header);
  }
  AddYear(year:Year):Observable<Year>{
    return this.http.post<Year>(`${environment.apiUrl}/year`,year,this.header);
  }
  DeleteYear(year:Year):Observable<Year>{
    return this.http.delete<Year>(`${environment.apiUrl}/year/${year.id}`,this.header)
  }





  setDepartment(depart:Department){
    this.department.next(depart);
  }
  getDepartment(){
    return this.department.value;
  }
}
