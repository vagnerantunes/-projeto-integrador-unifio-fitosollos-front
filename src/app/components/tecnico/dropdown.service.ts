import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Crq } from '../crq/crq.model';
import { Laboratorio } from '../laboratorio/laboratorio.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  baseUrlCrq = "http://localhost:8080/crqs";

  baseUrlLaboratorio = "http://localhost:8080/laboratorios";

  constructor(private http: HttpClient) { }

  readCrq(){
    return this.http.get<Crq[]>(this.baseUrlCrq);
  }

  createCrq(crq: Crq): Observable<Crq>{
    return this.http.post<Crq>(this.baseUrlCrq, crq)
  }

  readLaboratorio(){
    return this.http.get<Laboratorio[]>(this.baseUrlLaboratorio);
  }

  createLaboratorio(laboratorio: Laboratorio): Observable<Laboratorio>{
    return this.http.post<Laboratorio>(this.baseUrlLaboratorio, laboratorio)
  }

}