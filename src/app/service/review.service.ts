import { Injectable } from '@angular/core';
import { Review } from '../models/review';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { SubjectInface } from '../models/subject_inface';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
header={}

  constructor(
    private http:HttpClient    ) {
    this.header={Headers:new HttpHeaders({
          "Content-type":"application/json"
        })}
   }

   getReview(subject:SubjectInface):Observable<Review[]>{
      return this.http.get<Review[]>(`${environment.apiUrl}/review?subjectId=${subject.id}`,this.header);
    }
    AddReview(review:Review):Observable<Review>{
      return this.http.post<Review>(`${environment.apiUrl}/review`,review,this.header);
    }
    DeleteReview(review:Review):Observable<Review>{
      return this.http.delete<Review>(`${environment.apiUrl}/review/${review.id}`,this.header)
    }
}
