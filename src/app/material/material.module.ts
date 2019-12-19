import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule,  MatTableModule } from '@angular/material/';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatTableModule
  ],
  exports: [
    MatSnackBarModule,
    MatTableModule
  ]
})
export class MaterialModule { }
