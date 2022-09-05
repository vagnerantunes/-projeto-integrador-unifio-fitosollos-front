import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ResponsavelTecnico } from './ResponsavelTecnico.model';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  baseUrl = "http://backendjavafitosollos-env-1.eba-v4k2bhmp.us-east-1.elasticbeanstalk.com/tecnicos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(tecnico: ResponsavelTecnico): Observable<ResponsavelTecnico>{
    return this.http.post<ResponsavelTecnico>(this.baseUrl, tecnico)
  }

  read(): Observable<ResponsavelTecnico[]>{
    return this.http.get<ResponsavelTecnico[]>(this.baseUrl)
  }

  readById(tecId: string): Observable<ResponsavelTecnico>{
    const url = `${this.baseUrl}/${tecId}`
    return this.http.get<ResponsavelTecnico>(url)
  }
 
  update(tecnico: ResponsavelTecnico): Observable<ResponsavelTecnico>{
    const url = `${this.baseUrl}/${tecnico.tecId}`
    return this.http.put<ResponsavelTecnico>(url, tecnico)
  }
  
  delete(tecId: number): Observable<ResponsavelTecnico>{    
    const url = `${this.baseUrl}/${tecId}`
    return this.http.delete<ResponsavelTecnico>(url)
  }
} 
