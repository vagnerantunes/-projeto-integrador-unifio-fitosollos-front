import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormaPagamento } from '../formaPagamento/formaPagamento.model';
import { Amostra } from '../amostra/amostra.model';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  baseUrlFPagamento = "http://localhost:8080/fpagamentos";

  baseUrlAmostra = "http://localhost:8080/amostras";

  constructor(private http: HttpClient) { }

  readFpagamento(){
    return this.http.get<FormaPagamento[]>(this.baseUrlFPagamento);
  }

  createFpagamento(fpagamento: FormaPagamento): Observable<FormaPagamento>{
    return this.http.post<FormaPagamento>(this.baseUrlFPagamento, fpagamento)
  }

  readAmostra(){
    return this.http.get<Amostra[]>(this.baseUrlAmostra);
  }

  createAmostra(amostra: Amostra): Observable<Amostra>{
    return this.http.post<Amostra>(this.baseUrlAmostra, amostra)
  }


}