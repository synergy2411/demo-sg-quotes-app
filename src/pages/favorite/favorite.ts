import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { QuotePage } from './../quote/quote';
import { QuoteService } from './../../services/quote.service';
import { IQuote } from './../../model/quote.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController, AlertController } from 'ionic-angular';
import { stringify } from '@angular/compiler/src/util';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage implements OnInit {

  favoriteQuotes: IQuote[];

  constructor(private quoteService: QuoteService,
    private modalCtrl: ModalController,
    private camera: Camera,
    private alertCtrl: AlertController,
    private geolocation: Geolocation) { }

  img: string;
  imgData: string;

  takeAndShow() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.img = 'data:image/jpeg;base64,' + imageData;
      this.imgData = imageData;

      console.log("IMG : ", this.img)
      console.log("IMG DATA", this.imgData)
    }, (err) => {
      const alert = this.alertCtrl.create({
        title: "Error",
        message: 'Can"t take picture'
      });
      alert.present();
    });
  }


  getLocation() {
    this.geolocation.getCurrentPosition()
      .then(position => {
        const alert = this.alertCtrl.create({
          title: "My Location",
          message: 'Latitude : ' + position.coords.latitude + "\nLongitude : "
            + position.coords.longitude
        });
        alert.present();
      })
      .catch(err => {
        console.log(err);
        const alert = this.alertCtrl.create({
          title: "Error",
          message: 'Can"t locate the user'
        });
        alert.present();
      })
  }


  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options)
      .then((picture) => {
        const alert = this.alertCtrl.create({
          title: "Camera Piture",
          message: picture,
          buttons: ['OK']
        });
        alert.present();
      })
  }


  ngOnInit() { }

  ionViewWillEnter() {
    this.favoriteQuotes = this.quoteService.getFavoriteQuote();
  }

  onQuoteSel(quote: IQuote) {
    const modal = this.modalCtrl.create(QuotePage, { quote: quote });
    modal.present();

    modal.onDidDismiss(bool => {
      if (bool) {
        this.quoteService.removeQuoteFromFavorite(quote);
        this.favoriteQuotes = this.quoteService.getFavoriteQuote();
      }
    });

  }

  onSlideDelete(quote: IQuote) {
    this.quoteService.removeQuoteFromFavorite(quote);
    this.favoriteQuotes = this.quoteService.getFavoriteQuote();
  }
}
