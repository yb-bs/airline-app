import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'airline-app';
  box1Width = "90%";
  direction = "column";
  hideBox = false;
}
