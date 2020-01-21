import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatListModule, MatDividerModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { TmdbComponent } from './tmdb/tmdb.component';



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    RouterModule.forChild([])
  ],

  providers: [AuthGuard],

  declarations: [TmdbComponent]


})
export class CoreModule { }
