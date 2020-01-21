import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;
  submitted = false;

  // usuario: Object = {
  //   nombre: "Fernando",
  //   apellido: "Perez",
  //   email: "pepe@pepe.es",
  //   pais: "España",
  //   password1: null,
  //   password2: null
  // }
  // paises = [
  //   { codigo: "ESP", nombre: "España" },
  //   { codigo: "MRC", nombre: "Marruecos" },
  //   { codigo: "FRN", nombre: "Francia" }];

  paises = [
    "España", "Marruecos", "Francia"];

  sexos = ["Hombre", "Mujer"];

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'apellido': new FormControl('', Validators.required),
      'username': new FormControl('', Validators.required, this.existeusuario),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'pais': new FormControl('', Validators.required),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl('', Validators.required)
    })
    // this.forma.setValue(this.usuario);

    this.forma.controls['password2'].setValidators([
      Validators.required, this.notEqual.bind(this.forma)
    ])

    this.forma.controls['username'].valueChanges.subscribe( //funcion a la escucha de cambios
      data => {
        console.log(data)
      }
    )

    this.forma.controls['username'].statusChanges.subscribe( //funcion a la escucha de cambios
      data => {
        console.log(data)
      }
    )
  }

  notEqual(control: FormControl): { [s: string]: boolean } {

    let forma: any = this;
    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      }
    }
    return null;//si devuelve null esta todo bien
  }

  existeusuario(control: FormControl): Promise<any> | Observable<any> {
    let promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === "strider") {
            resolve({ existe: true })
          } else {
            resolve(null)
          }
        }, 300)
      }
    )
    return promise;
  }


  get f() { return this.forma.controls; }

  guardarCambios() {
    this.submitted = true;
    console.log(this.forma);
    console.log(this.forma.value);
    this.forma.reset();
  }



}
