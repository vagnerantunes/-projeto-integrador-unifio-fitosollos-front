import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TabelaPreco } from './TabelaPreco.model';

@Injectable({
  providedIn: 'root'
})
export class PrecoService {

  baseUrl = "http://localhost:8080/precos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(preco: TabelaPreco): Observable<TabelaPreco>{
    return this.http.post<TabelaPreco>(this.baseUrl, preco)
  }

  read(): Observable<TabelaPreco[]>{
    return this.http.get<TabelaPreco[]>(this.baseUrl)
  }

  readById(id: string): Observable<TabelaPreco>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<TabelaPreco>(url)
  }
 
  update(preco: TabelaPreco): Observable<TabelaPreco>{
    const url = `${this.baseUrl}/${preco.id}`
    return this.http.put<TabelaPreco>(url, preco)
  }
  
  delete(id: number): Observable<TabelaPreco>{    
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<TabelaPreco>(url)
  }
} 
