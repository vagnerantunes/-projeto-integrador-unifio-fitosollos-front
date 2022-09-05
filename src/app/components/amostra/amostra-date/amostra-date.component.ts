import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Amostra } from '../amostra.model';
import { AmostraService } from '../amostra.service';
import { DropdownService } from '../dropdown.service';
import { Usuario } from '../../usuario/usuario.model';
import { TipoAnalise } from '../../analise/TipoAnalise.model';
import { Cultura } from '../../cultura/cultura.model';
import { Proprietario } from '../../proprietario/proprietario.model';
import { ResponsavelTecnico } from '../../tecnico/ResponsavelTecnico.model';
import { Laboratorio } from '../../laboratorio/laboratorio.model';


@Component({
  selector: 'app-amostra-date',
  templateUrl: './amostra-date.component.html',
  styleUrls: ['./amostra-date.component.css']
})
export class AmostraDateComponent implements OnInit {

  amostra: Amostra = {
    amoDescricao: '',
    amoChegada: new Date(),
    amoSaida: new Date(),
    amoPeso: 0,
    amoFinalizada: '',
    amoCancelada: '',
    amoUsuario: 0,
    amoAnalise: 0,
    amoCultura: 0,
    amoProprietario: 0,
    amoTecnico: 0,
    amoLaboratorio: 0
  }

  usuario!: Usuario[];
  analise!: TipoAnalise[];
  cultura!: Cultura[];
  proprietario!: Proprietario[];
  tecnico!: ResponsavelTecnico[];
  laboratorio!: Laboratorio[];
  
  constructor(private amostraService: AmostraService, private router: Router, private dropdownService: DropdownService ) { }

  ngOnInit(): void {
    this.dropdownService.readUsuario().subscribe(dadosUsuario => {
      this.usuario = dadosUsuario;
      console.log(dadosUsuario);      
    });

    this.dropdownService.readAnalise().subscribe(dadosAnalise => {
      this.analise = dadosAnalise;
      console.log(dadosAnalise);      
    });

    this.dropdownService.readCultura().subscribe(dadosCultura => {
      this.cultura = dadosCultura;
      console.log(dadosCultura);      
    });

    this.dropdownService.readProprietario().subscribe(dadosProprietario => {
      this.proprietario = dadosProprietario;
      console.log(dadosProprietario);      
    });

    this.dropdownService.readTecnico().subscribe(dadosTecnico => {
      this.tecnico = dadosTecnico;
      console.log(dadosTecnico);      
    });

    this.dropdownService.readLaboratorio().subscribe(dadosLaboratorio => {
      this.laboratorio = dadosLaboratorio;
      console.log(dadosLaboratorio);      
    });
   
  }

  createAmostra():void{
    this.amostraService.create(this.amostra).subscribe(() => {this.amostraService.showMessage("Amostra criado!")});
    this.ngOnInit();
    this.cancel();    
  }

  cancel(): void{
    this.router.navigate(["/amostras"]);
  }
}