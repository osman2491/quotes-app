import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[] = [
      new Quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Quotes(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
    ];
  }
