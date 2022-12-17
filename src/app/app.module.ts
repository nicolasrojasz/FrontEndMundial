import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar'

import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component'
import { EstadisticasComponent } from './Components/estadisticas/estadisticas.component';
import { UpdateAsistenciasComponent } from './Components/estadisticas/update-asistencias/update-asistencias.component';
import { UpdateGoleadoresComponent } from './Components/estadisticas/update-goleadores/update-goleadores.component';
import{HttpClientModule} from'@angular/common/http'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { LoginComponent } from './Components/login/login.component';

import { MatCardModule } from '@angular/material/card'
import { JugadoresComponent } from './Components/jugadores/jugadores.component';
import { PartidosComponent } from './Components/partidos/partidos.component';
import { FormUpdatePartidosComponent } from './Components/partidos/form-update-partidos/form-update-partidos.component';


import { MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { PosicionesComponent } from './Components/posiciones/posiciones.component';
import { FormularioUpdatePosicionesComponent } from './Components/posiciones/formularioUpdatePosiciones/formulario-update-posiciones.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditUsuariosComponent } from './Components/usuarios/add-edit-usuarios/add-edit-usuarios.component';
import { VerUsuariosComponent } from './Components/usuarios/ver-usuarios/ver-usuarios.component';
import { CommonModule } from '@angular/common';
import { UpdateTarjetasRojasComponent } from './Components/estadisticas/update-tarjetas-rojas/update-tarjetas-rojas.component';


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
    AppComponent,
    AddEditUsuariosComponent,
    VerUsuariosComponent,
    UpdateGoleadoresComponent,
    UpdateAsistenciasComponent,
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
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
