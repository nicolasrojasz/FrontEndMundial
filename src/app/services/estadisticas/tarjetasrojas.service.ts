import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarjetaRoja } from 'src/app/models/TarjetaRoja';

@Injectable({
  providedIn: 'root'
})
export class TarjetasrojasService {

  myAppUrl = 'https://localhost:44335';
  myApiUrl = '/api/tarjetasrojas/';

  tarjetasrojas!: TarjetaRoja[];

  constructor(private httpclient: HttpClient) { }

  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };
    return httpOptions;
  }

  getTarjetasRojas():Observable<TarjetaRoja[]>{
    return this.httpclient.get<TarjetaRoja[]>(this.myAppUrl + this.myApiUrl);
  }

  getTarjetasRojas_2() {
    this.httpclient.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then((data) => {
        this.tarjetasrojas = data as TarjetaRoja[];

        this.tarjetasrojas?.sort((a, b) => (a.numero < b.numero ? 1 : -1));
      });
  }

  updateTarjetasRojas(id:number,posicion:TarjetaRoja):Observable<TarjetaRoja>{
    return this.httpclient.put<TarjetaRoja>(this.myAppUrl + this.myApiUrl + id, posicion, this.getHttpOptions())
  }
}
