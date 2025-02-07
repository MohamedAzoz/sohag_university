import { Injectable } from '@angular/core';
import { Summary } from '../models/summary';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { SubjectInface } from '../models/subject_inface';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SummaryServiceService {
  private summary=new BehaviorSubject<Summary|undefined>(undefined);
  public currentSummary=this.summary.asObservable()
 header={}

  constructor(
    private http:HttpClient    ) {
    this.header={Headers:new HttpHeaders({
          "Content-type":"application/json"
        })}
   }

   getSummaries():Observable<Summary[]>{
      return this.http.get<Summary[]>(`${environment.apiUrl}/summary`,this.header);
    }
   getSummary(subject:SubjectInface):Observable<Summary[]>{
      return this.http.get<Summary[]>(`${environment.apiUrl}/summary?subjectId=${subject.id}`,this.header);
    }
     getSummaryByStudentId(student:User):Observable<Summary[]>{
        return this.http.get<Summary[]>(`${environment.apiUrl}/summary?uploadedBy=${student.id}`,this.header);
      }
    AddSummary(summary:Summary):Observable<Summary>{
      return this.http.post<Summary>(`${environment.apiUrl}/summary`,summary,this.header);
    }
    DeleteSummary(summary:Summary):Observable<Summary>{
      return this.http.delete<Summary>(`${environment.apiUrl}/summary/${summary.id}`,this.header)
    }
    updateSummary(summary:Summary):Observable<Summary>{
        return this.http.patch<Summary>(`${environment.apiUrl}/summary/${summary.id}`,summary,this.header);
      }

      clickSummary(id:string){
        this.getSummaries().subscribe((data)=>{
          let chick=data.find((data)=>(data.id==id))
          if(chick){
            this.summary.next(chick);
          }else{
            this.summary.next(undefined);
          }
        })
      }
}
