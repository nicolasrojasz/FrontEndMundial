import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TablaPosiciones } from 'src/app/models/TablaPosiciones';

@Injectable({
  providedIn: 'root',
})
export class TablaPosicionesService {
  //Consumir Urls
  myAppUrl = 'https://localhost:44323';
  myApiUrl = '/api/tablaposiciones/';

  listPosiciones!: TablaPosiciones[];



  constructor(private http: HttpClient) {}



  obtenerPosiciones() {
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then((data) => {
        this.listPosiciones = data as TablaPosiciones[];
        console.log(data);
      });
  }

  actualizarPosciones(id:number,posicion:TablaPosiciones):Observable<TablaPosiciones>{
    return this.http.put<TablaPosiciones>(this.myAppUrl + this.myApiUrl + id, posicion)
  }
  

}
