import { Component} from '@angular/core';
import { LastfmService } from 'src/app/services/lastfm.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-lastfm',
  templateUrl: './lastfm.component.html',
  styleUrls: ['./lastfm.component.css']
})
export class LastfmComponent {

  displayedColumns: string[] = ['position', 'artist', 'name', 'playcount', 'cover'];
  dataSource: any; 

  constructor(private lastfm: LastfmService) {
    this.dataSource = this.getTracks();
  }
 
  getTracks(){
    this.lastfm.getUserTracks().subscribe(tracks => {
      this.dataSource = tracks.track;
    });
  }
}
