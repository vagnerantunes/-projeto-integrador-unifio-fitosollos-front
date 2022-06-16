import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ResultadoAnalise } from './resultadoAnalise.model';

@Injectable({
  providedIn: 'root'
})
export class ResultadoAnaliseService {

  baseUrl = "http://localhost:8080/resultados"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(resultadoAnalise: ResultadoAnalise): Observable<ResultadoAnalise>{
    return this.http.post<ResultadoAnalise>(this.baseUrl, resultadoAnalise)
  }

  read(): Observable<ResultadoAnalise[]>{
    return this.http.get<ResultadoAnalise[]>(this.baseUrl)
  }

  readById(resId: string): Observable<ResultadoAnalise>{
    const url = `${this.baseUrl}/${resId}`
    return this.http.get<ResultadoAnalise>(url)
  }
 
  update(resultadoAnalise: ResultadoAnalise): Observable<ResultadoAnalise>{
    const url = `${this.baseUrl}/${resultadoAnalise.resId}`
    return this.http.put<ResultadoAnalise>(url, resultadoAnalise)
  }
  
  delete(resId: number): Observable<ResultadoAnalise>{    
    const url = `${this.baseUrl}/${resId}`
    return this.http.delete<ResultadoAnalise>(url)
  }
} 
