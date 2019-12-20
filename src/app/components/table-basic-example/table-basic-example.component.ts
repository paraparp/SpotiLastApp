import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table-basic-example',
  templateUrl: './table-basic-example.component.html',
  styleUrls: ['./table-basic-example.component.css']
})
export class TableBasicExampleComponent {

  displayedColumns: string[] = ['name'];
  dataSource: any;

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

    this.spotify.getArtistTopTracks(id).subscribe(dataSource => {
      this.artistTopTracks = dataSource;
      console.log(dataSource);
    })
  }
}
