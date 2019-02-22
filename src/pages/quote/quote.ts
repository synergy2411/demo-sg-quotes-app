import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { IQuote } from '../../model/quote.model';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  quote : IQuote;

  constructor(private navParams : NavParams,
              private viewCtrl : ViewController){
    this.quote = this.navParams.get('quote');
  }

  onClose(bool : any){
    this.viewCtrl.dismiss(bool);
  }
}
