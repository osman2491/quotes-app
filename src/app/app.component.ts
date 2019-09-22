import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[] = [
    new Quotes(1, 'my name is osman','am 21 yrs old'),
    new Quotes(2, 'my favourate person','ifka'),
  ];
  }

