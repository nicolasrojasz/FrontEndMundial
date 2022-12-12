import { Component,Input } from '@angular/core';

import { TablaPosicionesService } from 'src/app/services/tablaPosiciones/tabla-posiciones.service'

@Component({
  selector: 'app-formulario-update-posiciones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class FormularioUpdatePosicionesComponent  {
  opcionSeleccionado: string  = '0'; // Iniciamos
  verSeleccion: string        = '';
  opcion:string = ''
  constructor(public tablaPosicionesServices: TablaPosicionesService) {}
  
  ngOnInit() {
    this.tablaPosicionesServices.obtenerPosiciones()
  }

  capturar() {
  
    this.verSeleccion = this.opcionSeleccionado;
    this.opcion = this.opcionSeleccionado;
    
    
  }


}

