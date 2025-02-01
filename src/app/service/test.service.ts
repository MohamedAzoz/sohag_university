import { Injectable } from '@angular/core';
import { Test } from '../models/test';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { SubjectInface } from '../models/subject_inface';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TestService {
header={}

  constructor(
    private http:HttpClient    ) {
    this.header={Headers:new HttpHeaders({
          "Content-type":"application/json"
        })}
   }

   getTest(subject:SubjectInface):Observable<Test[]>{
      return this.http.get<Test[]>(`${environment.apiUrl}/test?subjectId=${subject.id}`,this.header);
    }
     getTestByStudentId(student:User):Observable<Test[]>{
              return this.http.get<Test[]>(`${environment.apiUrl}/test?uploadedBy=${student.id}`,this.header);
            }
    AddTest(test:Test):Observable<Test>{
      return this.http.post<Test>(`${environment.apiUrl}/test`,test,this.header);
    }
    DeleteTest(test:Test):Observable<Test>{
      return this.http.delete<Test>(`${environment.apiUrl}/test/${test.id}`,this.header)
    }
    updateTest(test:Test):Observable<Test>{
      return this.http.patch<Test>(`${environment.apiUrl}/test/${test.id}`,test,this.header);
    }

}
