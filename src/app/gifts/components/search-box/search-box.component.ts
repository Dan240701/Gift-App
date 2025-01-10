import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftService } from '../../services/gift.service';


@Component({
  selector: 'gift-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

@ViewChild('txtTagInput')
public tagInput!: ElementRef<HTMLInputElement>
 constructor(private giftService: GiftService) {}


 searchTag(){
  const newTag = this.tagInput.nativeElement.value;


  this.giftService.searchTag(newTag);

  console.log(this.giftService.tagsHistory);

  this.tagInput.nativeElement.value = ''; //Limpiamos el input

 }
}
