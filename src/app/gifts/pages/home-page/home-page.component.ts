import { Component } from '@angular/core';
import { GiftService } from '../../services/gift.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'home-page-component',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GiftService){}

  get gifts(): Gif[]{
    return this.gifsService.giftList;
  }
}
