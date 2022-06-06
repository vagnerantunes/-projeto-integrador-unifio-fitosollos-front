import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormaPagamento } from '../formaPagamento/formaPagamento.model';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  baseUrlFPagamento = "http://localhost:8080/fpagamentos";

  //baseUrlLaboratorio = "http://localhost:8080/laboratorios";


  constructor(private http: HttpClient) { }

  readFpagamento(){
    return this.http.get<FormaPagamento[]>(this.baseUrlFPagamento);
  }

  createFpagamento(fpagamento: FormaPagamento): Observable<FormaPagamento>{
    return this.http.post<FormaPagamento>(this.baseUrlFPagamento, fpagamento)
  }

/*
  readLaboratorio(){
    return this.http.get<Laboratorio[]>(this.baseUrlLaboratorio);
  }

  createLaboratorio(laboratorio: Laboratorio): Observable<Laboratorio>{
    return this.http.post<Laboratorio>(this.baseUrlLaboratorio, laboratorio)
  }
*/

}