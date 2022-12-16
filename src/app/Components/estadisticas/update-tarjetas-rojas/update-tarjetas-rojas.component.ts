import { Component } from '@angular/core';
import { TarjetaRoja } from 'src/app/models/TarjetaRoja';
import { TarjetasrojasService } from 'src/app/services/estadisticas/tarjetasrojas.service';

@Component({
  selector: 'app-update-tarjetas-rojas',
  templateUrl: './update-tarjetas-rojas.component.html',
  styleUrls: ['./update-tarjetas-rojas.component.css']
})
export class UpdateTarjetasRojasComponent {

  opcionSeleccionado: string = '0' // Iniciamos
  opcion: string = ''
  //objTarjetasrojas: any = [];

  id = 0;
  tarjetasrojas = 0;
  jugadorId = 0;
  nombreJugador = '';
  infoSeleccionada:any;


  constructor(public tarjetasrojasService: TarjetasrojasService) {}

  ngOnInit() {
   this.tarjetasrojasService.getTarjetasRojas2();
  }

  capturar() {
    this.opcion = this.opcionSeleccionado
  }

  editar(posicion:any){
    const info = posicion
    this.infoSeleccionada = (info[parseInt(this.opcion)-1])
    console.log(this.infoSeleccionada)
    this.nombreJugador = this.infoSeleccionada.nombreJugador
    this.id = this.infoSeleccionada.id
    this.tarjetasrojas = this.infoSeleccionada.numero
    this.jugadorId = this.infoSeleccionada.jugadorId
  }

  enviarInfo(){
    let obj:TarjetaRoja = {
      id:(this.id),
      numero:(this.tarjetasrojas),
      jugadorId:(this.jugadorId),
      nombreJugador:(this.nombreJugador)

    }
    console.log(obj)

    this.tarjetasrojasService.updateTarjetasRojas(this.id, obj).subscribe((data) => {

      window.location.reload()
       
       console.log('Se actualizo');
     });

  }
}
