import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goleadores } from 'src/app/models/Goleadores';

@Injectable({
  providedIn: 'root'
})
export class GoleadoresService {

  myAppUrl = 'https://localhost:44335';
  myApiUrl = '/api/goleadores/';

 goleadores!: Goleadores[];

  constructor(private httpclient: HttpClient) { }
  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };
    return httpOptions;
  }


  getGoleadores():Observable<Goleadores[]>{
    return this.httpclient.get<Goleadores[]>(this.myAppUrl + this.myApiUrl);
  }

  getGoleadores_2() {
    this.httpclient.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then((data) => {
        this.goleadores = data as Goleadores[];

        this.goleadores?.sort((a, b) => (a.goles < b.goles ? 1 : -1));
      });
  }

  updateGoleadores(id:number,posicion:Goleadores):Observable<Goleadores>{
    return this.httpclient.put<Goleadores>(this.myAppUrl + this.myApiUrl + id, posicion, this.getHttpOptions())
  }
}
