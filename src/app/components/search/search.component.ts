import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  find(termino: string) {
    this.loading = true;

    this.spotify.getArtists(termino.replace(' ', '+'))
      .subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
      });
  }

}
