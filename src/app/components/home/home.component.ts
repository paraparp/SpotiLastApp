import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
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
  error: boolean;
  errorMessage: string;


  constructor(private spotify: SpotifyService, private _snackBar: MatSnackBar) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        this.newSongs = data;
        this.loading = false;
      }, (errorServicio) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = errorServicio.error.error.message;
        this.openSnackBar(this.errorMessage, 'Recargar Token')
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 20000,
    });

  }


}
