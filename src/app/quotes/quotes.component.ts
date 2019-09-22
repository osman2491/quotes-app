import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Quotes(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuotes(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
    }
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
