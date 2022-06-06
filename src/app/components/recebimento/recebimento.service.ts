import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Recebimento } from './recebiment.model';

@Injectable({
  providedIn: 'root'
})
export class RecebimentoService {

  baseUrl = "http://localhost:8080/recebimentos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(recebimento: Recebimento): Observable<Recebimento>{
    return this.http.post<Recebimento>(this.baseUrl, recebimento)
  }

  read(): Observable<Recebimento[]>{
    return this.http.get<Recebimento[]>(this.baseUrl)
  }

  readById(id: string): Observable<Recebimento>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Recebimento>(url)
  }
 
  update(recebimento: Recebimento): Observable<Recebimento>{
    const url = `${this.baseUrl}/${recebimento.id}`
    return this.http.put<Recebimento>(url, recebimento)
  }
  
  delete(id: number): Observable<Recebimento>{    
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Recebimento>(url)
  }
  
}  

