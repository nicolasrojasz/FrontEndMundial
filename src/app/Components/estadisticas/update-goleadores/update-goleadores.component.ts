import { Goleadores } from 'src/app/models/Goleadores';
import { GoleadoresService } from 'src/app/services/estadisticas/goleadores.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-goleadores',
  templateUrl: './update-goleadores.component.html',
  styleUrls: ['./update-goleadores.component.css'],
})
export class UpdateGoleadoresComponent {
  opcionSeleccionado: string = '0'; 
  opcion: string = '';

  id: number = 0;
  goles: number = 0;
  jugadorId: number = 0;
  nombreJugador: string = '';
  infoSeleccionada: any;

  constructor(public goleadoresService: GoleadoresService) {}

  ngOnInit() {
    this.goleadoresService.getGoleadores2();
  }

  capturar() {
    this.opcion = this.opcionSeleccionado;
  }

  editar(posicion: any) {
    const info = posicion;
    this.infoSeleccionada = info[parseInt(this.opcion) - 1];
    this.nombreJugador = this.infoSeleccionada.nombreJugador;
    this.id = this.infoSeleccionada.id;
    this.goles = this.infoSeleccionada.goles;
    this.jugadorId = this.infoSeleccionada.jugadorId;
  console.log(this.infoSeleccionada)
  }
  

  enviarInfo() {
    let obj: Goleadores = {
      id: this.id,
      goles:Number(this.goles),
      jugadorId: this.jugadorId,
      nombreJugador: this.nombreJugador
    };
    console.log(obj);

    this.goleadoresService.updateGoleadores(this.id, obj).subscribe((data) => {

     window.location.reload()
      
      console.log('Se actualizo');
    });
  }
}
