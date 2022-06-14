import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsavelTecnico } from '../ResponsavelTecnico.model';
import { Crq } from '../../crq/crq.model';
import { Laboratorio } from './../../laboratorio/laboratorio.model';
import { TecnicoService } from '../tecnico.service';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnico: ResponsavelTecnico = {
    tecNome: '',
    tecDdd: '',
    tecTelefone: '',
    tecCidade: '',
    tecUf: '',
    tecEndereco: '',
    tecBairro: '',
    tecCep: '',
    tecCrq: 1,
    tecLaboratorio: 1
  }

  crq!: Crq[];
  laboratorio!: Laboratorio[];
  
  constructor(private tecnicoService: TecnicoService, private router: Router, private dropdownService: DropdownService ) { }

  ngOnInit(): void {
    this.dropdownService.readCrq().subscribe(dados => {
      this.crq = dados;
      console.log(dados);
    });

    this.dropdownService.readLaboratorio().subscribe(dados => {
      this.laboratorio = dados;
      console.log(dados);
    });
  }
  
  createTecnico():void{
    this.tecnicoService.create(this.tecnico).subscribe(() => {this.tecnicoService.showMessage("Técnico criado!")});
    this.ngOnInit();
    this.cancel();
  }

  cancel(): void{
    this.router.navigate(["/tecnicos"]);
  }
}