import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TipoAnalise } from '../analise/TipoAnalise.model';
import { Laboratorio } from '../laboratorio/laboratorio.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  baseUrlAnalise = "http://localhost:8080/analises";

  baseUrlLaboratorio = "http://localhost:8080/laboratorios";


  constructor(private http: HttpClient) { }

  readAnalise(){
    return this.http.get<TipoAnalise[]>(this.baseUrlAnalise);
  }

  createAnalise(analise: TipoAnalise): Observable<TipoAnalise>{
    return this.http.post<TipoAnalise>(this.baseUrlAnalise, analise)
  }

  readLaboratorio(){
    return this.http.get<Laboratorio[]>(this.baseUrlLaboratorio);
  }

  createLaboratorio(laboratorio: Laboratorio): Observable<Laboratorio>{
    return this.http.post<Laboratorio>(this.baseUrlLaboratorio, laboratorio)
  }

}

