import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  private _TagsHistory: string[] = [];
  constructor() { }

  get tagsHistory(): string[] {
    return [...this._TagsHistory];
  }

  searchTag( tag: string){
    this._TagsHistory.unshift(tag);
  }
}
