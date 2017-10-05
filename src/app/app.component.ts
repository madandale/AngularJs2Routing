import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1 class="title">Angular Router</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/login" routerLinkActive="active">login</a>

    </nav>
    <router-outlet></router-outlet>
  `

})
export class AppComponent {
}
