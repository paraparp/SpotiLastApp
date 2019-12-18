import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBar
  ],
  exports: [
    MatSnackBar
  ],
})
export class MaterialModule { }
