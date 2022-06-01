import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { TipoAnalise } from './TipoAnalise.model';

@Injectable({
  providedIn: 'root'
})
export class AnaliseService {

  baseUrl = "http://localhost:8080/analises"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(analise: TipoAnalise): Observable<TipoAnalise>{
    return this.http.post<TipoAnalise>(this.baseUrl, analise)
  }

  read(): Observable<TipoAnalise[]>{
    return this.http.get<TipoAnalise[]>(this.baseUrl)
  }

  readById(id: string): Observable<TipoAnalise>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<TipoAnalise>(url)
  }
 
  update(analise: TipoAnalise): Observable<TipoAnalise>{
    const url = `${this.baseUrl}/${analise.id}`
    return this.http.put<TipoAnalise>(url, analise)
  }
  
  delete(id: number): Observable<TipoAnalise>{    
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<TipoAnalise>(url)
  }
}  
