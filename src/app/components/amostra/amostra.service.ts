import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Amostra } from './amostra.model';

@Injectable({
  providedIn: 'root'
})
export class AmostraService {

  baseUrl = "http://localhost:8080/amostras"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(amostra: Amostra): Observable<Amostra>{
    return this.http.post<Amostra>(this.baseUrl, amostra)
  }

  read(): Observable<Amostra[]>{
    return this.http.get<Amostra[]>(this.baseUrl)
  }

  readById(id: string): Observable<Amostra>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Amostra>(url)
  }
 
  update(amostra: Amostra): Observable<Amostra>{
    const url = `${this.baseUrl}/${amostra.id}`
    return this.http.put<Amostra>(url, amostra)
  }
  
  delete(id: number): Observable<Amostra>{    
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Amostra>(url)
  }
}  

