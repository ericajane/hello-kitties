import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <h1 class='header'>
    {{ title }}
  </h1>
  <hr />
  <div><img src="./assets/axel.jpg" /></div>
  <hr />
  <div>
  <app-counter></app-counter></div>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello there, kitties!';
}
