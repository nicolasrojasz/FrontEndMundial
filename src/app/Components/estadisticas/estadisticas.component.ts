import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  Jugador: string;
  Goles: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Jugador: 'Hydrogen', Goles:3 },
  { Jugador: 'Helium', Goles:2},
  { Jugador: 'Lithium', Goles:4},
  { Jugador: 'Beryllium', Goles:5},
  { Jugador: 'Boron', Goles:10},
  { Jugador: 'Carbon', Goles:4},
  { Jugador: 'Nitrogen', Goles:3},
  { Jugador: 'Oxygen', Goles:7},
  { Jugador: 'Fluorine', Goles:8},
  { Jugador: 'Neon', Goles:6}
];


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent {
  displayedColumns: string[] = ['Jugador', 'Goles'];
  dataSource = ELEMENT_DATA;

 
}



