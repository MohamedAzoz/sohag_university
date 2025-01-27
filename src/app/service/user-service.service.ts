import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnInit {

  constructor(
    private API:HttpClient
  ) { }
  ngOnInit(): void {

  }
  getUsers():Observable<User[]>{
    return this.API.get<User[]>(`${environment.apiUrl}/users`)
  }
  
}
