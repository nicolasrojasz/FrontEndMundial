import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asistencia } from 'src/app/models/Asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  myAppUrl = 'https://localhost:44335';
  myApiUrl = '/api/asistencias/';

  listAsistencias!:Asistencia[]

  constructor(private http: HttpClient) { }

  getAsistencias_2(){
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then((data) => {
        this.listAsistencias = data as Asistencia[];
      });
    
  }


  async getAsistencias(){
    await this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then((data) => {
        this.listAsistencias = data as Asistencia[];
      });
      return this.listAsistencias
  }

  updateAsistencias(id:number,posicion:Asistencia):Observable<Asistencia>{
    return this.http.put<Asistencia>(this.myAppUrl + this.myApiUrl + id, posicion)
  }

}
