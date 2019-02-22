import { Component } from '@angular/core';
import { AlertController, IonicPage, NavParams } from 'ionic-angular';
import { IQuote } from './../../model/quote.model';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  quoteGroup : { category: string, quotes: IQuote[],icon: string};

  constructor(private navParams : NavParams, 
              private alertCtrl : AlertController){
    console.log("RECEIVED", this.navParams.data);
    this.quoteGroup = this.navParams.get('category');
  }

  onFavorite(quote : IQuote){
    const alert = this.alertCtrl.create({
      title : "Are you sure?",
      message : 'Do your want to make it favorite?',
      buttons : [{
        text : "Yes, please go ahead",
        handler : ()=>{
          console.log(quote);
        }
      }, {
        text : "No, I changed my mind.",
        role : 'Cancel'
      }]
    })
    alert.present();
  }

}