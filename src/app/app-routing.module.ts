import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from './Components/estadisticas/estadisticas.component';
import { JugadoresComponent } from './Components/jugadores/jugadores.component';
import { LoginComponent } from './Components/login/login.component';
import { PartidosComponent } from './Components/partidos/partidos.component';
import { PosicionesComponent } from './Components/posiciones/posiciones.component';
import { VerUsuariosComponent } from './Components/usuarios/ver-usuarios/ver-usuarios.component';

const routes: Routes = [
    {
      path:"",
      pathMatch:'full',
      redirectTo:'/inicio'
    },
/*     {
      path:'usuarios',
      loadChildren:()=> import("./modulos/usuarios/usuarios.module").then( modu=>modu.UsuariosModule)
    },   */
    
    { path: 'inicio', component: PartidosComponent },
    { path: 'partidos', component: PartidosComponent },
    { path: 'login', component: LoginComponent  },
    { path: 'jugadores', component: JugadoresComponent },
    { path: 'posiciones', component: PosicionesComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'usuarios', component: VerUsuariosComponent },
  
/*     {
      path:"*",
      component:ErrorComponent
    }, */
  ];
  


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }