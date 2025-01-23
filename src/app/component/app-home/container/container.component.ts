import { Component, AfterViewInit} from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { CollegeComponent } from '../../college/college.component';
import { SliderComponent } from "../slider/slider.component";
import { ArticlesComponent } from '../articles/articles.component';

declare const bootstrap: any;
@Component({
  selector: 'app-container',
  imports: [CarouselComponent, CollegeComponent, SliderComponent,ArticlesComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // ScrollSpy
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#nav',
    });

    // Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );

    // Carousel
    const carousel = new bootstrap.Carousel('#myCarousel');
  }
}
