import { Injectable } from '@angular/core';
import { IQuote } from '../model/quote.model';

@Injectable()
export class QuoteService {
    private favoriteQuotes = [];

    getFavoriteQuote() {
        return this.favoriteQuotes;
    }

    addQuoteToFavorite(quote: IQuote) {
        const promise = new Promise((resolve, reject) => {
            this.favoriteQuotes.push(quote);
            resolve(true);
        });
        return promise;
    }

    removeQuoteFromFavorite(quote : IQuote){
        const position = this.favoriteQuotes.findIndex(element => element.id === quote.id)
        this.favoriteQuotes.splice(position, 1);
    }

    isQuoteFavorite(quote: IQuote){
        return this.favoriteQuotes.find(element => element.id === quote.id )
    }

}