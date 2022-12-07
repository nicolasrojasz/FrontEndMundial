import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { AppComponent } from './app.component'
import { NavBarComponent } from './Components/nav-bar/nav-bar.component'
import { FooterComponent } from './Components/footer/footer.component'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { MatCardModule } from '@angular/material/card'
import { PartidosComponent } from './Components/partidos/partidos.component'
import { LoginComponent } from './Components/login/login.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { Routes, RouterModule } from '@angular/router'
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JugadoresComponent } from './Components/jugadores/jugadores.component';
import {MatGridListModule} from '@angular/material/grid-list';

const rutas: Routes = [
  { path: 'partidos', component: PartidosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jugadores', component: JugadoresComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PartidosComponent,
    LoginComponent,
    JugadoresComponent,
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
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
