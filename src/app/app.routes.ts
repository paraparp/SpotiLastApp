import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
<<<<<<< HEAD
import { TableBasicExampleComponent } from './components/table-basic-example/table-basic-example.component';

=======
import { LastfmComponent } from './components/lastfm/lastfm.component';
>>>>>>> 4fea8fe732d03331a1bcb485e5c851e6728bfdc5

export const ROUTES: Routes = [
  { path: 'home', component: LastfmComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'tabla/:id', component: TableBasicExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

]
