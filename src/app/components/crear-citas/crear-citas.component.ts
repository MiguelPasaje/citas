import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent {
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';
  
  @Output() nuevaCita = new EventEmitter<any>()

  formularioIncorrecto = false;

  agregarCita(){
    if (this.nombre === '' || this.fecha === '' || this.hora === '' || this.sintomas === '') {
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false


    //creamos objeto para enviarselo al padre
    const CITA = {
      nombre:this.nombre,
      fecha:this.fecha,
      hora:this.hora,
      sintomas:this.sintomas
    }
    this.resetForm()
    this.nuevaCita.emit(CITA)
  }

  resetForm(){
    this.nombre = ''
    this.fecha = ''
    this.hora = ''
    this.sintomas = ''

  }

}
