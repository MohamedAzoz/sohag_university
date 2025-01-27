import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.development';
import { SubjectInface } from '../models/subject_inface';
import { Year } from '../models/year';
import { BehaviorSubject } from 'rxjs';
import { CollegeServiceService } from './college-service.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {
  header={}
private yearBehaviorSubject=new BehaviorSubject<Year|null>(null);
 currentYear:Observable<Year|null>=this.yearBehaviorSubject.asObservable();

private SubjectBehaviorSubject=new BehaviorSubject<SubjectInface|null>(null);
 currentSubject:Observable<SubjectInface|null>=this.SubjectBehaviorSubject.asObservable();

private contentBehaviorSubject=new BehaviorSubject<string>('');
 currentContent:Observable<string>=this.contentBehaviorSubject.asObservable();

private boolenBehaviorSubject=new BehaviorSubject<boolean>(false);
 currentbool:Observable<boolean>=this.boolenBehaviorSubject.asObservable();

  constructor(
    private http:HttpClient,
    private college_Service:CollegeServiceService
    ) {
    this.header={Headers:new HttpHeaders({
          "Content-type":"application/json"
        })}
   }

   getSubjects(year:Year):Observable<SubjectInface[]>{
      return this.http.get<SubjectInface[]>(`${environment.apiUrl}/subject?yearId=${year.id}`,this.header);
    }
    AddSubject(subject:SubjectInface):Observable<SubjectInface>{
      return this.http.post<SubjectInface>(`${environment.apiUrl}/subject`,subject,this.header);
    }
    DeleteSubject(subject:SubjectInface):Observable<SubjectInface>{
      return this.http.delete<SubjectInface>(`${environment.apiUrl}/subject/${subject.id}`,this.header)
    }




    setData(year:Year){
     this.college_Service.currentDepartment.subscribe((v)=>{
        let x= v?.id
        if(year.departmentId==x){

          this.yearBehaviorSubject.next(year);
        }else{
            this.yearBehaviorSubject.next(null)
        }
      })
    }
      getData(){
      return this.yearBehaviorSubject.value;
    }

    setSubject(subject:SubjectInface,value:boolean){
      this.currentYear.subscribe((v)=>{
         let x= v?.id
         if(subject.yearId==x){
          this.boolenBehaviorSubject.next(value)
           this.SubjectBehaviorSubject.next(subject);
         }else{
          this.boolenBehaviorSubject.next(false)
             this.SubjectBehaviorSubject.next(null)
         }
       })
     }
   get getSubject(){
       return this.SubjectBehaviorSubject.value;
     }
   get getBoolen(){
       return this.boolenBehaviorSubject.value;
     }

     setContent(value:string){
        this.contentBehaviorSubject.next(value);
     }
   get getContent(){
       return this.contentBehaviorSubject.value;
     }
}
