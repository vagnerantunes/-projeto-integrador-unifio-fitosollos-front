import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Crq } from './crq.model';

@Injectable({
  providedIn: 'root'
})
export class CrqService {

  baseUrl = "http://backendjavafitosollos-env-1.eba-v4k2bhmp.us-east-1.elasticbeanstalk.com/crqs"
  

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(crq: Crq): Observable<Crq>{
    return this.http.post<Crq>(this.baseUrl, crq)
  }

  read(): Observable<Crq[]>{
    return this.http.get<Crq[]>(this.baseUrl)
  }

  readById(crqId: string): Observable<Crq>{
    const url = `${this.baseUrl}/${crqId}`
    return this.http.get<Crq>(url)
  }
 
  update(crq: Crq): Observable<Crq>{
    const url = `${this.baseUrl}/${crq.crqId}`
    return this.http.put<Crq>(url, crq)
  }
  
  delete(crqId: number): Observable<Crq>{    
    const url = `${this.baseUrl}/${crqId}`
    return this.http.delete<Crq>(url)
  }
}  