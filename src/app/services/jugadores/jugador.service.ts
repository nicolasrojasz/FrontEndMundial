import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  readonly url = 'https://localhost:44335/api';
  constructor(private httpclient: HttpClient) { } 

 
getJugador():Observable<any[]>{
  return this.httpclient.get<any[]>(this.url+'/jugadores');
}




}

