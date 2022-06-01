import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Laboratorio } from './laboratorio.model';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  baseUrl = "http://localhost:8080/laboratorios"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(laboratorio: Laboratorio): Observable<Laboratorio>{
    return this.http.post<Laboratorio>(this.baseUrl, laboratorio)
  }

  read(): Observable<Laboratorio[]>{
    return this.http.get<Laboratorio[]>(this.baseUrl)
  }

  readById(id: string): Observable<Laboratorio>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Laboratorio>(url)
  }
 
  update(laboratorio: Laboratorio): Observable<Laboratorio>{
    const url = `${this.baseUrl}/${laboratorio.id}`
    return this.http.put<Laboratorio>(url, laboratorio)
  }
  
  delete(id: number): Observable<Laboratorio>{    
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Laboratorio>(url)
  }
}  
