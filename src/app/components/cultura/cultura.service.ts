import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cultura } from './cultura.model';

@Injectable({
  providedIn: 'root'
})
export class CulturaService {

  baseUrl = "http://localhost:8080/culturas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(cultura: Cultura): Observable<Cultura>{
    return this.http.post<Cultura>(this.baseUrl, cultura)
  }

  read(): Observable<Cultura[]>{
    return this.http.get<Cultura[]>(this.baseUrl)
  }

  readById(id: string): Observable<Cultura>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cultura>(url)
  }
 
  update(cultura: Cultura): Observable<Cultura>{
    const url = `${this.baseUrl}/${cultura.id}`
    return this.http.put<Cultura>(url, cultura)
  }
  
  delete(id: number): Observable<Cultura>{    
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cultura>(url)
  }
}  