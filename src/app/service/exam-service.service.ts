import { Injectable } from '@angular/core';
import { Exam } from '../models/exam';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { SubjectInface } from '../models/subject_inface';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {
 header={}

  constructor(
    private http:HttpClient    ) {
    this.header={Headers:new HttpHeaders({
          "Content-type":"application/json"
        })}
   }

   getExam(subject:SubjectInface):Observable<Exam[]>{
      return this.http.get<Exam[]>(`${environment.apiUrl}/exam?subjectId=${subject.id}`,this.header);
    }
   getExamByStudentId(student:User):Observable<Exam[]>{
      return this.http.get<Exam[]>(`${environment.apiUrl}/exam?uploadedBy=${student.id}`,this.header);
    }
    AddExam(exam:Exam):Observable<Exam>{
      return this.http.post<Exam>(`${environment.apiUrl}/exam`,exam,this.header);
    }
    DeleteExam(exam:Exam):Observable<Exam>{
      return this.http.delete<Exam>(`${environment.apiUrl}/exam/${exam.id}`,this.header)
    }

    updateExam (exam:Exam):Observable<Exam>{
      return this.http.patch<Exam>(`${environment.apiUrl}/exam/${exam.id}`,exam,this.header);
    }


}
