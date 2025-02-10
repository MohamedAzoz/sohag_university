import { Injectable } from '@angular/core';
import { Notification } from '../models/notification';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoticesService {
private notices:Notification[]=[];
private NotificationBehavior=new BehaviorSubject<Notification[]|undefined>(undefined);
getNotification=this.NotificationBehavior.asObservable();
  constructor() { }
AddNotification(type:string,subjectName:string,StudentName:string,StudentCollege:string,URL_Content:string,){
     const oneNotification:Notification={'type':type,
      'subjectName':subjectName,
      'StudentName':StudentName,
      'StudentCollege':StudentCollege,
      'URL_Content':URL_Content,
      'show':false,
      'time':new Date
    }
    this.notices.unshift(oneNotification);
    this.NotificationBehavior.next([...this.notices]);
  }

}
