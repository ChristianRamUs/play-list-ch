import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LogingService } from '../login/loging.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  API_URL: string = environment.API_URL;
  token = '';

  constructor(private httpClient: HttpClient,
    private loginService: LogingService) {
    this.token = this.loginService.getToken();
  }

  getSongs(nameSong) {
    const SONGS_URL = `${this.API_URL}search?q=${nameSong}&type=track%2Cartist&market=US&limit=10&offset=5`
    
    return this.httpClient.get(SONGS_URL, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      })
    }).toPromise();

  }
}
