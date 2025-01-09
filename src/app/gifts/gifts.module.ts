import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GiftCardListComponent } from './components/card-list/card-list.component'; // Ensure this path is correct

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    GiftCardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GiftsModule { }
