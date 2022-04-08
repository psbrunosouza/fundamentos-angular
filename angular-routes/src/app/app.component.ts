import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routes';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  goTo(): void {
    this.router.navigate(['/second-page'])
  }

  goToWithParam(): void {
    this.router.navigate(['/component-example', 2])
  }

  goToWithQueryParam(): void {
    this.router.navigate(['/second-page'], {
      queryParams: {prop: 1}
    })
  }

  goToWithRelatedPath(): void {
    this.router.navigate(['./second-page'], {
      relativeTo: this.activatedRoute,
    })
  }

  navigateByUrl(): void {
    this.router.navigateByUrl('/second-page')
  }
}
