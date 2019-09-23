import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[] = [
      new Quotes(1, 'Be yourself everyone else is already taken',
      'by Oscar Wilde the quote was submited by osman',new Date(2020,3,14)),
    new Quotes(2,'Be the change that you ','wish to see in the world',new Date(2019,6,9)),
    ];
  }
