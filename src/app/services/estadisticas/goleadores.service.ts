import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goleadores } from 'src/app/models/Goleadores';

@Injectable({
  providedIn: 'root'
})
export class GoleadoresService {

  myAppUrl = 'https://localhost:44323';
  myApiUrl = '/api/goleadores/';

  goleadores!: Goleadores[];

  constructor(private http: HttpClient) { }

  getGoleadores2(){
     this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then((data) => {
        this.goleadores = data as Goleadores[];
      });
    }
  
  async getGoleadores(){
    await this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then((data) => {
        this.goleadores = data as Goleadores[];
      });
    return this.goleadores
  }



  updateGoleadores(id:number,posicion:Goleadores):Observable<Goleadores>{
    return this.http.put<Goleadores>(this.myAppUrl + this.myApiUrl + id, posicion)
  } 
}
