import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../usuario/usuario.model';
import { TipoAnalise } from '../analise/TipoAnalise.model';
import { Cultura } from '../cultura/cultura.model';
import { Proprietario } from '../proprietario/proprietario.model';
import { ResponsavelTecnico } from '../tecnico/ResponsavelTecnico.model';
import { Laboratorio } from '../laboratorio/laboratorio.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  baseUrlUsuario = "http://localhost:8080/usuarios";

  baseUrlAnalise = "http://localhost:8080/analises";

  baseUrlCultura = "http://localhost:8080/culturas";

  baseUrlProprietario = "http://localhost:8080/proprietarios";

  baseUrlTecnico = "http://localhost:8080/tecnicos";  

  baseUrlLaboratorio = "http://localhost:8080/laboratorios";

  constructor(private http: HttpClient) { }

  //usuario
  readUsuario(){
    return this.http.get<Usuario[]>(this.baseUrlUsuario);
  }

  createUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseUrlUsuario, usuario)
  }

  //tipo de analise
  readAnalise(){
    return this.http.get<TipoAnalise[]>(this.baseUrlAnalise);
  }

  createAnalise(analise: TipoAnalise): Observable<TipoAnalise>{
    return this.http.post<TipoAnalise>(this.baseUrlAnalise, analise)
  }

  //cultura
  readCultura(){
    return this.http.get<Cultura[]>(this.baseUrlCultura);
  }

  createCultura(cultura: Cultura): Observable<Cultura>{
    return this.http.post<Cultura>(this.baseUrlCultura, cultura)
  }

  //proprietario
  readProprietario(){
    return this.http.get<Proprietario[]>(this.baseUrlProprietario);
  }

  createProprietario(proprietario: Proprietario): Observable<Proprietario>{
    return this.http.post<Proprietario>(this.baseUrlProprietario, proprietario)
  }

  //tecnico
  readTecnico(){
    return this.http.get<ResponsavelTecnico[]>(this.baseUrlTecnico);
  }

  createTecnico(tecnico: ResponsavelTecnico): Observable<ResponsavelTecnico>{
    return this.http.post<ResponsavelTecnico>(this.baseUrlTecnico, tecnico)
  }

  //laboratorio
  readLaboratorio(){
    return this.http.get<Laboratorio[]>(this.baseUrlLaboratorio);
  }

  createLaboratorio(laboratorio: Laboratorio): Observable<Laboratorio>{
    return this.http.post<Laboratorio>(this.baseUrlLaboratorio, laboratorio)
  }

}
