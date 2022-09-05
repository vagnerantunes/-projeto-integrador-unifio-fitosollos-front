import { Amostra } from './../amostra/amostra.model';
import { Nematoide } from './../nematoide/nematoide.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  baseUrlNematoide = "http://backendjavafitosollos-env-1.eba-v4k2bhmp.us-east-1.elasticbeanstalk.com/nematoides";

  baseUrlAmostra = "http://backendjavafitosollos-env-1.eba-v4k2bhmp.us-east-1.elasticbeanstalk.com/amostras";


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


