import { Component, AfterViewInit} from '@angular/core';
declare const bootstrap: any;

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

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
