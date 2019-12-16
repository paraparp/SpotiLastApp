import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  //  Client ID     : 9b88ce9e2f9d4c7f946115e343f4d7a0
  // Client Secret : 791ec09adfe0422e96caa974780e84d6

  newSongs: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {

    this.loading = true;

    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        this.newSongs = data;
        this.loading = false;
      });
  }
}
