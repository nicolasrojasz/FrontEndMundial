import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarjetaRoja } from 'src/app/models/TarjetaRoja';

@Injectable({
  providedIn: 'root'
})
export class TarjetasrojasService {

  myAppUrl = 'https://localhost:44335';
  myApiUrl = '/api/tarjetasrojas/';

  listTarjetasRojas!:TarjetaRoja []

  constructor(private http: HttpClient) { }

  getTarjetasRojas2(){
     this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then((data) => {
        this.listTarjetasRojas = data as TarjetaRoja[];
      });
 }


  async getTarjetasRojas(){
    await this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then((data) => {
        this.listTarjetasRojas = data as TarjetaRoja[];
      });
      return this.listTarjetasRojas
  }

  updateTarjetasRojas(id:number,posicion:TarjetaRoja):Observable<TarjetaRoja>{
    return this.http.put<TarjetaRoja>(this.myAppUrl + this.myApiUrl + id, posicion)
  }
}
