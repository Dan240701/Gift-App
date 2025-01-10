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

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();
    if(this._TagsHistory.includes(tag)){
      this._TagsHistory = this._TagsHistory.filter((oldtag) => oldtag !== tag); //Filtramos el tag repetido
    }

    this._TagsHistory.unshift(tag); //Agregamos el tag al inicio del array
    this._TagsHistory = this.tagsHistory.splice(0,10); //Limitamos el historial a 10 elementos
  }

  searchTag( tag: string){

    this.organizeHistory(tag);

    if (tag.length === 0) return;
  }
}
