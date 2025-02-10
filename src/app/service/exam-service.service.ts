import { Injectable } from '@angular/core';
import { Exam } from '../models/exam';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { SubjectInface } from '../models/subject_inface';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {
 private exam=new BehaviorSubject<Exam|undefined>(undefined);
public currentExam=this.exam.asObservable();
 header={}
  constructor(
    private http:HttpClient    ) {
    this.header={Headers:new HttpHeaders({
          "Content-type":"application/json"
        })}
   }

   getExams():Observable<Exam[]>{
      return this.http.get<Exam[]>(`${environment.apiUrl}/exam/`,this.header);
    }
   getExam(subject:SubjectInface):Observable<Exam[]>{
      return this.http.get<Exam[]>(`${environment.apiUrl}/exam?subjectId=${subject.id}`,this.header);
    }
  //  getExamone(id:string):Observable<Exam>{
  //     return this.http.get<Exam>(`${environment.apiUrl}/exam?id=${id}`,this.header);
  //   }
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

    clickExam(id:string){
      this.getExams().subscribe((data)=>{
        let chick=data.find((data)=>(data.id==id))
        if(chick){
          this.exam.next(chick);
        }else{
          this.exam.next(undefined);
        }
      });
    }

}
