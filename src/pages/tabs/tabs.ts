import { LibraryPage } from './../library/library';
import { FavoritePage } from './../favorite/favorite';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  favoritePage = FavoritePage;
  libraryPage = LibraryPage;

}
