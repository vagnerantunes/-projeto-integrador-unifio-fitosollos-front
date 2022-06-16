import { Amostra } from './../amostra/amostra.model';
import { Nematoide } from './../nematoide/nematoide.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  baseUrlNematoide = "http://localhost:8080/nematoides";

  baseUrlAmostra = "http://localhost:8080/amostras";


  constructor(private http: HttpClient) { }

  readNematoide(){
    return this.http.get<Nematoide[]>(this.baseUrlNematoide);
  }

  createNematoide(nematoide: Nematoide): Observable<Nematoide>{
    return this.http.post<Nematoide>(this.baseUrlNematoide, nematoide)
  }

  readAmostra(){
    return this.http.get<Amostra[]>(this.baseUrlAmostra);
  }

  createAmostra(amostra: Amostra): Observable<Amostra>{
    return this.http.post<Amostra>(this.baseUrlAmostra, amostra)
  }

}


