import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GiftService {


  public giftList: Gif[] = [];
  private ApiKey: string = 'oUlRLWB8o94lJk5bUp9XgNSXdiov4JFa';
  private ServiceUrl: string = 'https://api.giphy.com/v1/gifs';
  private _TagsHistory: string[] = [];

  constructor( private http: HttpClient){} //Inyectamos el servicio HttpClient


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

  async searchTag( tag: string): Promise<void>{

    this.organizeHistory(tag);
    if (tag.length === 0) return;

    const params = new HttpParams()
      .set('api_key', this.ApiKey)
      .set('q', tag)
      .set('limit', '10')

    const url =`https://api.giphy.com/v1/gifs/search`;

    // solicitamos la informacion al servidor por medio de la url y utilizacion de http
    this.http.get<SearchResponse>(`${this.ServiceUrl}/search`, { params }).subscribe((resp => {
      this.giftList = resp.data;
      console.log(this.giftList);


    }))

  }
}
