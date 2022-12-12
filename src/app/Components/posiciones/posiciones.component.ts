import { Component } from '@angular/core'
import { TablaPosicionesService } from 'src/app/services/tablaPosiciones/tabla-posiciones.service'

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css'],
})
export class PosicionesComponent {
  constructor(public tablaPosicionesServices: TablaPosicionesService) {}

  ngOnInit() {
    this.tablaPosicionesServices.obtenerPosiciones()
  }
}
