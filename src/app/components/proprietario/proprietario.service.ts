import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Proprietario } from './proprietario.model';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {

  baseUrl = "http://localhost:8080/proprietarios"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(proprietario: Proprietario): Observable<Proprietario>{
    return this.http.post<Proprietario>(this.baseUrl, proprietario)
  }

  read(): Observable<Proprietario[]>{
    return this.http.get<Proprietario[]>(this.baseUrl)
  }

  readById(id: string): Observable<Proprietario>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Proprietario>(url)
  }
 
  update(proprietario: Proprietario): Observable<Proprietario>{
    const url = `${this.baseUrl}/${proprietario.id}`
    return this.http.put<Proprietario>(url, proprietario)
  }
  
  delete(id: number): Observable<Proprietario>{    
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Proprietario>(url)
  }
  
}
