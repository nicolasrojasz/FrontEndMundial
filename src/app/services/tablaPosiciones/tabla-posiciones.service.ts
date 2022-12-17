import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TablaPosiciones } from 'src/app/models/TablaPosiciones';

@Injectable({
  providedIn: 'root',
})
export class TablaPosicionesService {
  //Consumir Urls
  myAppUrl = 'https://localhost:44335';
  myApiUrl = '/api/tablaposiciones/';

  listPosiciones!: TablaPosiciones[];



  constructor(private http: HttpClient) {}
  
  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };
    return httpOptions;
  }


  obtenerPosiciones() {
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then((data) => {
        this.listPosiciones = data as TablaPosiciones[];
        
      });
  }




  actualizarPosciones(id:number,datos:TablaPosiciones):Observable<TablaPosiciones>{
    return this.http.put<TablaPosiciones>(this.myAppUrl + this.myApiUrl + id, datos,  this.getHttpOptions())
  }
  

}
