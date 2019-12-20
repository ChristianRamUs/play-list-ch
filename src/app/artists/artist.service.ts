import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { LogingService } from '../login/loging.service';

@Injectable({
  providedIn: 'root'
})

export class ArtistService {

  API_URL = environment.API_URL;
  token='';

  constructor(private httpClient: HttpClient ,private loginService:LogingService)  
  { 
    this.token=this.loginService.getToken();
  }

  getArtist (nameArtist){
    const ARTIST_URL =`${this.API_URL}search?q=${nameArtist}&type=artist&market=US&limit=3&offset=0`;
    

    return this.httpClient.get(ARTIST_URL,{
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json" ,
        "Authorization": `Bearer ${this.token}`
      })
    }).toPromise();
  }

  


  getAlbumByArtist(id){
    const ALBUM_URL = `${this.API_URL}artists/${id}/albums?include_groups=single%2Cappears_on&market=US&limit=3&offset=0`;
 
    return this.httpClient.get(ALBUM_URL, {
        headers: new HttpHeaders({
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.token}`
        })
    })
    .toPromise();
  }

}
