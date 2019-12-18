import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = [];
  artistTopTracks: any = [];
  loading: boolean;

  constructor(private router: ActivatedRoute,
    private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => { //recibimos los parameteos de la ruta
      this.getArtist(params['id']);
      this.getArtistTopTracks(params['id']);
    })

  }

  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;

    })
  }

  getArtistTopTracks(id: string) {

    this.spotify.getArtistTopTracks(id).subscribe(artistTopTracks => {
      this.artistTopTracks = artistTopTracks;
      console.log(artistTopTracks);
    })
  }
}
