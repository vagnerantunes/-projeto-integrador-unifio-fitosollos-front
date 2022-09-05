import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cultura } from './cultura.model';

@Injectable({
  providedIn: 'root'
})
export class CulturaService {

  baseUrl = "http://backendjavafitosollos-env-1.eba-v4k2bhmp.us-east-1.elasticbeanstalk.com/culturas"

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

  readById(culId: string): Observable<Cultura>{
    const url = `${this.baseUrl}/${culId}`
    return this.http.get<Cultura>(url)
  }
 
  update(cultura: Cultura): Observable<Cultura>{
    const url = `${this.baseUrl}/${cultura.culId}`
    return this.http.put<Cultura>(url, cultura)
  }
  
  delete(culId: number): Observable<Cultura>{    
    const url = `${this.baseUrl}/${culId}`
    return this.http.delete<Cultura>(url)
  }
}  