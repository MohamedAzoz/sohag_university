import { Component, AfterViewInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
declare const bootstrap: any;

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // ScrollSpy
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#nav',
    });

  }
}
