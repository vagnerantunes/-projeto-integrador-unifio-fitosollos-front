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
  selector: 'app-amostra-create',
  templateUrl: './amostra-create.component.html',
  styleUrls: ['./amostra-create.component.css']
})
export class AmostraCreateComponent implements OnInit {

  amostra: Amostra = {
    descricao: '',
    chegada: new Date(),
    saida: new Date(),
    peso: 0,
    finalizida: '',
    cancelada: '',
    usuario: 1,
    analise: 1,
    cultura: 1,
    proprietario: 1,
    tecnico: 1,
    laboratorio: 1
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
