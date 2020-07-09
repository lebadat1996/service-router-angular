import {Component, OnInit} from '@angular/core';
import {IDictionary} from './IDictionary';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';
  listWord: IDictionary[];

  constructor() {
  }

}
