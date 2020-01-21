import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TableBasicExampleComponent } from './components/table-basic-example/table-basic-example.component';
import { LastfmComponent } from './components/lastfm/lastfm.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuard } from './services/auth.guard';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { TmdbComponent } from './components/tmdb/tmdb.component';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'tabla/:id', component: TableBasicExampleComponent },
  { path: 'lastfm', component: LastfmComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  { path: 'template', component: TemplateComponent },
  { path: 'data', component: DataComponent },
  { path: 'tmdb', component: TmdbComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }


]
