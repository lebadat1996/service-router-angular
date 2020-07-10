import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {GalleryConfig} from './image-gallery/token';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageGalleryModule,
  ],
  providers: [
    {provide: GalleryConfig, useValue: 2}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
