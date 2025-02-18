import { Component , AfterViewInit, OnInit} from '@angular/core';
import { AppHomeService } from '../../../service/app-home.service';
import { Carousel } from '../../../models/carousel';
declare const bootstrap: any;

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit ,AfterViewInit{
  carousels!:Carousel[]
  constructor(
    private carousel_Service:AppHomeService
  ){

  }
  ngAfterViewInit(): void {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#nav',
    });
  }
  ngOnInit(): void {
   this.carousel_Service.getCarousels().subscribe((data)=>{
      this.carousels=data;
   })
  }


}
