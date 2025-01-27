import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Slider } from '../models/slider';
import { environment } from '../../environments/environment.development';
import { Carousel } from '../models/carousel';
import { College } from '../models/college';

@Injectable({
  providedIn: 'root'
})
export class AppHomeService implements OnInit {

  constructor(
    private API:HttpClient
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getCarousels():Observable<Carousel[]>{
    return this.API.get<Carousel[]>(`${environment.apiUrl}/carousel`)
  }
  getColleges():Observable<College[]>{
    return this.API.get<College[]>(`${environment.apiUrl}/college`)
  }
 getSliders():Observable<Slider[]>{
  return this.API.get<Slider[]>(`${environment.apiUrl}/slider`)
 }
}
