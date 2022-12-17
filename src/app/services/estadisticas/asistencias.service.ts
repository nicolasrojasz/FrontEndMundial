import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asistencia } from 'src/app/models/Asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  myAppUrl = 'https://localhost:44335';
  myApiUrl = '/api/asistencias/';

  asistencias!: Asistencia[];

  constructor(private httpclient: HttpClient) { }

  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };
    return httpOptions;
  }


  getAsistencias():Observable<Asistencia[]>{
    return this.httpclient.get<Asistencia[]>(this.myAppUrl + this.myApiUrl);
  }

  getAsistencias_2() {
    this.httpclient.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then((data) => {
        this.asistencias = data as Asistencia[];

        this.asistencias?.sort((a, b) => (a.asistencias < b.asistencias ? 1 : -1));
      });
  }

  updateAsistencias(id:number,posicion:Asistencia):Observable<Asistencia>{
    return this.httpclient.put<Asistencia>(this.myAppUrl + this.myApiUrl + id, posicion, this.getHttpOptions())
  }

}
