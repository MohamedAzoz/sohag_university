import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { College } from '../models/college';
import { environment } from '../../environments/environment.development';
import { Department } from '../models/department';
import { Year } from '../models/year';

@Injectable({
  providedIn: 'root'
})
export class CollegeServiceService {
  header={}
 private department=new BehaviorSubject<Department|null>(null);
 currentDepartment:Observable<Department|null>=this.department.asObservable();
  constructor(
    private http:HttpClient,
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
  updateCollege(college:College):Observable<College>{
    return this.http.patch<College>(`${environment.apiUrl}/college/${college.id}`,college,this.header);
  }


  //================ Departments  Service =====================
  getDepartments(id:string):Observable<Department[]>{
    return this.http.get<Department[]>(`${environment.apiUrl}/department?collegeId=${id}`);
  }
  getDepartment_Doctor():Observable<Department[]>{
    return this.http.get<Department[]>(`${environment.apiUrl}/department`);
  }
  getDepartmentone(id:string):Observable<Department>{
    return this.http.get<Department>(`${environment.apiUrl}/department/${id}`);
  }
  AddDepartment(department:Department):Observable<Department>{
    return this.http.post<Department>(`${environment.apiUrl}/department`,department,this.header);
  }
  DeleteDepartment(department:Department):Observable<Department>{
    return this.http.delete<Department>(`${environment.apiUrl}/department/${department.id}`,this.header)
  }
  updateDepartment(department:Department):Observable<Department>{
        return this.http.patch<Department>(`${environment.apiUrl}/department/${department.id}`,department,this.header);
      }

  //================= Year  Service===================
  getYears_Doctor():Observable<Year[]>{
    return this.http.get<Year[]>(`${environment.apiUrl}/year`,this.header);
  }
  getYears(id:string):Observable<Year[]>{
    return this.http.get<Year[]>(`${environment.apiUrl}/year?departmentId=${id}`,this.header);
  }
  getYear(id:string):Observable<Year>{
    return this.http.get<Year>(`${environment.apiUrl}/year/${id}`,this.header);
  }
  AddYear(year:Year):Observable<Year>{
    return this.http.post<Year>(`${environment.apiUrl}/year`,year,this.header);
  }
  DeleteYear(year:Year):Observable<Year>{
    return this.http.delete<Year>(`${environment.apiUrl}/year/${year.id}`,this.header)
  }
  updateYear(year:Year):Observable<Year>{
    return this.http.patch<Year>(`${environment.apiUrl}/year/${year.id}`,year,this.header);
  }
  setDepartment(depart:Department){
    this.department.next(depart);
  }
  getDepartment(){
    return this.department.value;
  }
}
