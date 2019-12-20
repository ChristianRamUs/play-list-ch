import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { ArtistsComponent } from './artists/artists.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { SongService } from './songs/song.service';
import { ArtistService} from './artists/artist.service'

import {FormsModule} from '@angular/forms';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
      AppComponent,
      SongsComponent,   
      ArtistsComponent,
      NotFoundComponent,
      AlbumsComponent,
      LoginComponent],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule],
  providers: [SongService,ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
