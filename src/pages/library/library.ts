import { QuotesPage } from './../quotes/quotes';
import { QUOTES_DATA } from './../../model/quotes';
import { IQuote } from './../../model/quote.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  quotesCollection : { category: string, quotes: IQuote[],icon: string}[];
  
  constructor(private navCtrl : NavController){}

  ngOnInit(){
    this.quotesCollection = QUOTES_DATA;
    // console.log("Collection : ", this.quotesCollection);
  }
  
  onQuoteCategorySel(quoteCategory : { category: string, quotes: IQuote[],icon: string}){
    // console.log("SEL CATEGORY : " , quoteCategory);
    this.navCtrl.push(QuotesPage, {category : quoteCategory});
  }

}
