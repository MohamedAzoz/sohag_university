import { Injectable } from '@angular/core';
import { Summary } from '../models/summary';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { SubjectInface } from '../models/subject_inface';

@Injectable({
  providedIn: 'root'
})
export class SummaryServiceService {
 header={}

  constructor(
    private http:HttpClient    ) {
    this.header={Headers:new HttpHeaders({
          "Content-type":"application/json"
        })}
   }

   getSummary(subject:SubjectInface):Observable<Summary[]>{
      return this.http.get<Summary[]>(`${environment.apiUrl}/summary?subjectId=${subject.id}`,this.header);
    }
    AddSummary(summary:Summary):Observable<Summary>{
      return this.http.post<Summary>(`${environment.apiUrl}/summary`,summary,this.header);
    }
    DeleteSummary(summary:Summary):Observable<Summary>{
      return this.http.delete<Summary>(`${environment.apiUrl}/summary/${summary.id}`,this.header)
    }
}
