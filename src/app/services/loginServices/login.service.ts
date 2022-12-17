import { EnvironmentInjector, Injectable } from '@angular/core';

//imports
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  //readonly url = 'https://localhost:44335/api/';
  url: string = environment.url;
  dataEnSesion = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
  ) {
    this.verificarSesion();
  }

  verificarSesion(){
    let data=this.obtenerSesion();
    if (data) {
      this.refrescarDatosSession(data);
    }
  }

  refrescarDatosSession(datos:any){
    this.dataEnSesion.next(datos); 
  }

  // validaruser(usuario:string, clave:string):Observable<ModelUser>{
  //   return this.http.post<ModelUser>(`${this.url}/identificarCliente`, {
  //     usuario:usuario,
  //     clave:clave
  //   });
  // }


  // guardarSesion(data:ModelUser){
  //   data.islogin=true;
  //   let stringData= JSON.stringify(data);
  //   sessionStorage.setItem("dataSesion",stringData);
  //   this.refrescarDatosSession(data);
  // }

  obtenerSesion(){
    let data = sessionStorage.getItem("token");
    if(data){
      //let data=JSON.parse(data);
      return data;
    }else{
      return null;
    }
  }

  eliminarSesion(){
    sessionStorage.removeItem("token");
    this.refrescarDatosSession('');
  }

  logOut(){
    sessionStorage.removeItem('token');
    this.refrescarDatosSession('');
  }


  seInicioSesion(){
    let dataString = sessionStorage.getItem("token");
      return dataString ;
  }

  obtenerDatosUsuarioEnSesion(){
    return this.dataEnSesion.asObservable();
  }

  obtenerToken(){
    let data = sessionStorage.getItem("token");
    if(data){
      //let token = JSON.parse(dataString);
      return data;
    }else{
      return '';
    }
  }

  //metodos
  //post para login de usuarios
  public post(data: any) {
    return this.http.post(this.url + 'login', data);
  }

  //save token in sessionStorage
  GuardarToken(token: string) {
    sessionStorage.setItem('token', token)
    this.refrescarDatosSession(token);
  }
  // //getId
  // public getId(id: number | string): Observable<any> {
  //   return this.http.get<any>(this.url + 'usuarios/' + id);
  // }

}