import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Recebimento } from './recebiment.model';

@Injectable({
  providedIn: 'root'
})
export class RecebimentoService {

  baseUrl = "http://backendjavafitosollos-env-1.eba-v4k2bhmp.us-east-1.elasticbeanstalk.com/recebimentos"

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

  readById(recId: string): Observable<Recebimento>{
    const url = `${this.baseUrl}/${recId}`
    return this.http.get<Recebimento>(url)
  }
 
  update(recebimento: Recebimento): Observable<Recebimento>{
    const url = `${this.baseUrl}/${recebimento.recId}`
    return this.http.put<Recebimento>(url, recebimento)
  }
  
  delete(recId: number): Observable<Recebimento>{    
    const url = `${this.baseUrl}/${recId}`
    return this.http.delete<Recebimento>(url)
  }
  
}  

