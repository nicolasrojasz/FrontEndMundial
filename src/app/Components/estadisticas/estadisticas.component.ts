import { Component } from '@angular/core';
import { Asistencia } from 'src/app/models/Asistencia';
import { Goleadores } from 'src/app/models/Goleadores';
import { TarjetaRoja } from 'src/app/models/TarjetaRoja';
import { AsistenciasService } from 'src/app/services/estadisticas/asistencias.service';
import { GoleadoresService } from 'src/app/services/estadisticas/goleadores.service';
import { TarjetasrojasService } from 'src/app/services/estadisticas/tarjetasrojas.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent {
  goleadores: Goleadores[] | undefined;
  asistencias: Asistencia[] | undefined;
  tarjetasrojas: TarjetaRoja[] | undefined;

  constructor(
    public goleadoresService: GoleadoresService,
    public asistenciasService: AsistenciasService,
    public tarjetasrojasService: TarjetasrojasService
  ) {}

  async ngOnInit() {
    await Promise.resolve(this.goleadoresService.getGoleadores()).then(
      (data) => {
        this.goleadores = data;
      }
    );

    await Promise.resolve(this.asistenciasService.getAsistencias()).then(
      (data) => {
        this.asistencias = data;
      }
    );

    await Promise.resolve(this.tarjetasrojasService.getTarjetasRojas()).then(
      (data) => {
        this.tarjetasrojas = data;
      }
    );

    await this.getOrdenGoleadores();
    await this.getOrdenAsistencias();
    await this.getOrdenTarjetaRojas();
  }
  getOrdenGoleadores() {
    this.goleadores?.sort((a, b) => (a.goles < b.goles ? 1 : -1));
  }

  getOrdenAsistencias() {
    this.asistencias?.sort((a, b) => (a.asistencias < b.asistencias ? 1 : -1));
    
  }
  getOrdenTarjetaRojas() {
    this.tarjetasrojas?.sort((a, b) => (a.numero < b.numero ? 1 : -1));
  
  }
}
