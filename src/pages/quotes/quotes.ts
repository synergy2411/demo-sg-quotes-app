import { IQuote } from './../../model/quote.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  quoteGroup : { category: string, quotes: IQuote[],icon: string};

  constructor(private navParams : NavParams){
    console.log("RECEIVED", this.navParams.data);
    this.quoteGroup = this.navParams.get('category');
  }

}