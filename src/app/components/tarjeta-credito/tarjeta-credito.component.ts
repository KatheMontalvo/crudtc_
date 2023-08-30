import { Component } from '@angular/core';
import { TarjetaCredito } from './tarjeta-credito.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent {
  listTarjetas: TarjetaCredito[] = [
    new TarjetaCredito ('Juan Perez', 123456789, "08/2023", 123),
    new TarjetaCredito ('Migue Muñoz',987654321, "08/2023", 123)
  ];
  form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      nombre:['', Validators.required],
      numTarjeta:[,[Validators.required, Validators.max(3), Validators.min(3) ]],
      fecha:['',[Validators.required, Validators.max(5), Validators.min(5)]],
      cvv:[, [Validators.required, Validators.max(3), Validators.min(3)]]
    })
  }

  guardar(){
    console.log(this.form)
    const newTarjeta: TarjetaCredito = new TarjetaCredito(this.form.get('nombre')?.value,this.form.get('numTarjeta')?.value,this.form.get('fecha')?.value,this.form.get('cvv')?.value);
    this.listTarjetas.push(newTarjeta);
    this.form.reset()
    Swal.fire(
      'Exito!',
      'Se agregó una tarjeta nueva!',
      'success'
    )
  }
  eliminarTarjeta(index: number){
    this.listTarjetas.splice(index,1)
    Swal.fire(
      'Exito!',
      'Se eliminó la tarjeta!',
      'success'
    )
  }

}
