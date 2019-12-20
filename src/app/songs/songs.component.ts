import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';
import { LogingService } from '../login/loging.service';
import { Router } from '@angular/router';


interface IResponse {
  tracks: { items: [] }
}

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']

})
export class SongsComponent implements OnInit {
  newSong: string;
  songs = [];

  constructor(private songService: SongService,
    private loginService: LogingService,
    private router: Router
  ) { }

  searchSong() {
    this.songService.getSongs(this.newSong).then((response: IResponse) => {
      console.log(response);
      this.songs = response.tracks.items;
    }).catch(error => console.log(error));
  }

  ngOnInit() {
    if (!this.loginService.getToken()) {
      this.router.navigate(['login']);
    }
  }

}
