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
export class CarouselComponent implements AfterViewInit ,OnInit {
  carousels!:Carousel[]
  constructor(
    private carousel_Service:AppHomeService
  ){

  }
  ngOnInit(): void {
   this.carousel_Service.getCarousels().subscribe((data)=>{
      this.carousels=data
   })
  }

  ngAfterViewInit(): void {
    // Carousel
    const carousel = new bootstrap.Carousel('#myCarousel');
  }
}
