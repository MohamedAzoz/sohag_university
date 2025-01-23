import { Component , AfterViewInit} from '@angular/core';
declare const bootstrap: any;

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Carousel
    const carousel = new bootstrap.Carousel('#myCarousel');
  }
}
