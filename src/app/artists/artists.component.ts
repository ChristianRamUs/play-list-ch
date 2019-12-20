import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';
import { LogingService } from '../login/loging.service';
import { Router } from '@angular/router';



interface IResponse {
  artists: { items: [] }
}


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artist = '';
  artists = [];

  constructor(private artistService: ArtistService,
    private loginService: LogingService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.loginService.getToken()) {
      this.router.navigate(['login']);
    }
  }


  searchArtist() {
    this.artistService.getArtist(this.artist).
      then((response: IResponse) => {
        console.log(response)
        this.artists = response.artists.items;
      }).catch(error => console.log(error));
  }

}
