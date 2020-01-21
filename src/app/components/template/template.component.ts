import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  //   styles: [`
  // .ng-invalid.ng-touched:not(form) {
  //   border: 2px solid red;
  // }
  //
  // `]
})
export class TemplateComponent implements OnInit {

  // usuario: Object = { nombre: "Rodrigo", apellido: "Parapar", email: "dobarqueiro@gmaiñl.com" }
  usuario: Object = { nombre: "Rodrigo", apellido: "Parapar", email: "dobarqueiro@gmail.com", pais: "ESP", sexo: "Hombre", acepta: false };

  paises = [
    { codigo: "ESP", nombre: "España" },
    { codigo: "MRC", nombre: "Marruecos" },
    { codigo: "FRN", nombre: "Francia" }];

  sexos = ["Hombre", "Mujer"];

  constructor() {

  }

  ngOnInit() {

  }

  guardar(forma: NgForm) {
    console.log("ngForm", forma);
    console.log(forma.value);
    console.log("usuario", this.usuario);

  }

}
