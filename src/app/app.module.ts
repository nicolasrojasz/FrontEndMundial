import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'

import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar'


import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component'
import { EstadisticasComponent } from './Components/estadisticas/estadisticas.component';
import { UpdateAsistenciasComponent } from './Components/estadisticas/update-asistencias/update-asistencias.component';
import { UpdateGoleadoresComponent } from './Components/estadisticas/update-goleadores/update-goleadores.component';
import { UpdateTarjetasRojasComponent } from './Components/estadisticas/update-tarjetas-rojas/update-tarjetas-rojas.component';
import{HttpClientModule} from'@angular/common/http'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { LoginComponent } from './Components/login/login.component'

import { MatCardModule } from '@angular/material/card'
import { JugadoresComponent } from './Components/jugadores/jugadores.component';
import { PartidosComponent } from './Components/partidos/partidos.component';
import { FormUpdatePartidosComponent } from './Components/partidos/form-update-partidos/form-update-partidos.component';


import { MatFormFieldModule } from '@angular/material/form-field'
import { Routes, RouterModule } from '@angular/router'
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { PosicionesComponent } from './Components/posiciones/posiciones.component';
import { FormularioUpdatePosicionesComponent } from './Components/posiciones/formularioUpdatePosiciones/formulario-update-posiciones.component';
const rutas: Routes = [
  { path: '', component: PartidosComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'posiciones', component: PosicionesComponent },
  { path: 'estadisticas', component: EstadisticasComponent }
]

@NgModule({
  declarations: [
    EstadisticasComponent,
    PartidosComponent,
    NavBarComponent,
    FooterComponent,
    PosicionesComponent,
    JugadoresComponent,
    LoginComponent,
    FormularioUpdatePosicionesComponent,
    FormUpdatePartidosComponent,
    UpdateAsistenciasComponent,
    UpdateGoleadoresComponent,
    UpdateTarjetasRojasComponent
  
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rutas),
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [NavBarComponent],
})
export class AppModule {}
