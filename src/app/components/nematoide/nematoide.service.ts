import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Nematoide } from './nematoide.model';

@Injectable({
  providedIn: 'root'
})
export class NematoideService {

  baseUrl = "http://localhost:8080/nematoides"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(nematoide: Nematoide): Observable<Nematoide>{
    return this.http.post<Nematoide>(this.baseUrl, nematoide)
  }

  read(): Observable<Nematoide[]>{
    return this.http.get<Nematoide[]>(this.baseUrl)
  }

  readById(nemId: string): Observable<Nematoide>{
    const url = `${this.baseUrl}/${nemId}`
    return this.http.get<Nematoide>(url)
  }
 
  update(nematoide: Nematoide): Observable<Nematoide>{
    const url = `${this.baseUrl}/${nematoide.nemId}`
    return this.http.put<Nematoide>(url, nematoide)
  }
  
  delete(nemId: number): Observable<Nematoide>{    
    const url = `${this.baseUrl}/${nemId}`
    return this.http.delete<Nematoide>(url)
  }
}  

