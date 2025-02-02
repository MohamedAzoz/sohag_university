import { Component, AfterViewInit} from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { SliderComponent } from "../slider/slider.component";
import { CollegesComponent } from '../colleges/colleges.component';

declare const bootstrap: any;
@Component({
  selector: 'app-container',
  imports: [CarouselComponent, CollegesComponent, SliderComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    function icown(element:any) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >=0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    window.addEventListener('scroll', function() {
      var iconsl = document.querySelectorAll('.ic');

      iconsl.forEach(function(icon) {
        if (icown(icon)) {
          icon.classList.add("icsh");
        }
      });
    });


  }
}
