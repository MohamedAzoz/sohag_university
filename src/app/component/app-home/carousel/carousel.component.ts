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
  //  let galry:any = document.getElementById("galry");

  //   let arrcolors:any[] = [];
  //   arrcolors[0] = "linear-gradient(0deg, #E0F7FA, #80CBC4,#CFD8DC)";
  //   arrcolors[1] = "linear-gradient(45deg, #E0F7FA, #80CBC4,#CFD8DC)";
  //   arrcolors[2] = "linear-gradient(90deg, #E0F7FA, #80CBC4,#CFD8DC)";
  //   arrcolors[3] = "linear-gradient(135deg, #E0F7FA, #80CBC4,#CFD8DC)";
  //   arrcolors[4] = "linear-gradient(180deg, #E0F7FA, #80CBC4,#CFD8DC)";
  //   arrcolors[5] = "linear-gradient(225deg, #E0F7FA, #80CBC4,#CFD8DC)";
  //   arrcolors[6] = "linear-gradient(270deg, #E0F7FA, #80CBC4,#CFD8DC)";
  //   arrcolors[7] = "linear-gradient(315deg, #E0F7FA, #80CBC4,#CFD8DC)";
  //   arrcolors[8] = "linear-gradient(360deg, #E0F7FA, #80CBC4,#CFD8DC)";
  //   var counter = 0;

  //   function colofunc() {
  //       if (counter < 9) {
  //           galry.style.transition = "background-image 1.5s";
  //           galry.style.backgroundImage = arrcolors[counter];
  //           counter++;
  //       } else {
  //           counter = 0;
  //       }
  //   }
  //   setInterval(colofunc, 1000);
  //   const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  //     target: '#nav',
  //   });
  }
  ngOnInit(): void {
   this.carousel_Service.getCarousels().subscribe((data)=>{
      this.carousels=data
   })
  }


}
