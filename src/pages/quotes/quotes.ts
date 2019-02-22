import { QuotePage } from './../quote/quote';
import { QuoteService } from './../../services/quote.service';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavParams, ToastController } from 'ionic-angular';
import { IQuote } from './../../model/quote.model';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  quoteGroup: { category: string, quotes: IQuote[], icon: string };

  constructor(private navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService: QuoteService,
    private toastCtrl: ToastController) {
    // console.log("RECEIVED", this.navParams.data);
    this.quoteGroup = this.navParams.get('category');
  }

  onFavorite(quote: IQuote) {
    const alert = this.alertCtrl.create({
      title: "Are you sure?",
      message: 'Do your want to make it favorite?',
      buttons: [{
        text: "Yes, please go ahead",
        handler: () => {
          this.quoteService.addQuoteToFavorite(quote)
            .then(response => {
              if (response) {
                const toast = this.toastCtrl.create({
                  message: "Successfully added to favorite",
                  duration: 2000
                });
                toast.present();
              }
            });
        }
      }, {
        text: "No, I changed my mind",
        role: 'Cancel'
      }]
    })
    alert.present();
  }

  onUnfavorite(quote : IQuote){
    this.quoteService.removeQuoteFromFavorite(quote);
  }

  isFavorite(quote : IQuote){
    return this.quoteService.isQuoteFavorite(quote);
  }

}