import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TableBasicExampleComponent } from './components/table-basic-example/table-basic-example.component';
import { LastfmComponent } from './components/lastfm/lastfm.component';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'tabla/:id', component: TableBasicExampleComponent },
  { path: 'lastfm', component: LastfmComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

]
