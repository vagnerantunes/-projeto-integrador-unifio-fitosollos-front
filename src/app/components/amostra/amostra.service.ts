import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Amostra } from './amostra.model';

@Injectable({
  providedIn: 'root'
})
export class AmostraService {

  baseUrl = "http://backendjavafitosollos-env-1.eba-v4k2bhmp.us-east-1.elasticbeanstalk.com/amostras"

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

  readById(amoId: string): Observable<Amostra>{
    const url = `${this.baseUrl}/${amoId}`
    return this.http.get<Amostra>(url)
  }
 
  update(amostra: Amostra): Observable<Amostra>{
    const url = `${this.baseUrl}/${amostra.amoId}`
    return this.http.put<Amostra>(url, amostra)
  }
  
  delete(amoId: number): Observable<Amostra>{    
    const url = `${this.baseUrl}/${amoId}`
    return this.http.delete<Amostra>(url)
  }
}  

