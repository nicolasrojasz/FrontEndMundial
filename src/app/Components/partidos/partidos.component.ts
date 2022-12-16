import { Component } from '@angular/core';
import { ResultadoService } from 'src/app/services/resultadoServicio/resultado.service';
import { Resultado } from 'src/app/models/resultado';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent {

  ResultadoList!: Resultado[];
  numero!: Resultado["numeroPartido"];
  EquipoList: any =[];

  EquipoMap: Map<number, string> = new Map();

  constructor(public serviceResultado: ResultadoService){

  }

  ngOnInit(){
    //this.ResultadoList$ = this.serviceResultado.getResultado();
    this.serviceResultado.obtenerResultado2();
  }
}

