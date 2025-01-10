import { Component, ViewChild } from '@angular/core';
import { GiftService } from '../../gifts/services/gift.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  constructor(private gitfHistory: GiftService){} //Inyectamos el servicio

  get tagsHistory(): string[]{ //Creamos un metodo para obtener el historial de tags por medio de la obtencion de los valores el array del servicio
    return this.gitfHistory.tagsHistory;
  }

  searchTag(tag: string):void { //Creamos un metodo para buscar un tag en el historial
    this.gitfHistory.searchTag(tag);
  }



}


