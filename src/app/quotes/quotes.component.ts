import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes(1, 'Be yourself everyone else is already taken',
    'by Oscar Wilde the quote was submited by osman',new Date(2020,3,14)),
  new Quotes(2,'Be the change that you wish to see in the world','Mahatma Gandhi',new Date(2019,6,9)),
  ];
  addNewQuotes(quotes){
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength+1;
    quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
  }
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
