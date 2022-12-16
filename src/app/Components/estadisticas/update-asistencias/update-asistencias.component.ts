import { Component } from '@angular/core';
import { Asistencia } from 'src/app/models/Asistencia';
import { AsistenciasService } from 'src/app/services/estadisticas/asistencias.service';

@Component({
  selector: 'app-update-asistencias',
  templateUrl: './update-asistencias.component.html',
  styleUrls: ['./update-asistencias.component.css']
})
export class UpdateAsistenciasComponent {
  opcionSeleccionado: string = '0' // Iniciamos
  opcion: string = ''
  //asistencia: any = [];

  id = 0;
  asistencias = 0;
  jugadorId = 0;
  nombreJugador = '';
  infoSeleccionada:any;

  asistente!:Asistencia[];

  constructor(public asistenciasservice: AsistenciasService) {}

  ngOnInit() {
   /*  this.getDataAsistencias(); */
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
    this.asistencias = this.infoSeleccionada.asistencias
    this.jugadorId = this.infoSeleccionada.jugadorId
  }

  enviarInfo(){
    let obj:Asistencia = {
      id:(this.id),
      asistencias:(this.asistencias),
      jugadorId:(this.jugadorId),
      nombreJugador:(this.nombreJugador)

    }
    console.log(obj)
    this.asistenciasservice.updateAsistencias((this.id), obj).subscribe((data) => {
      this.asistenciasservice.getAsistencias()
      console.log("Se actualizo");
    })

  }
/* 
  getDataAsistencias() {
    this.asistenciasservice.getAsistencias().subscribe((dataGol: Asistencia[]) => {
      this.asistente = dataGol;
    });
 } */

}
