import { Component, OnInit } from '@angular/core';
import { ResponsavelTecnico } from '../ResponsavelTecnico.model';
import { TecnicoService } from '../tecnico.service';

@Component({
  selector: 'app-tecnico-read',
  templateUrl: './tecnico-read.component.html',
  styleUrls: ['./tecnico-read.component.css']
})
export class TecnicoReadComponent implements OnInit {

  tecnicos!: ResponsavelTecnico[]
  displayedColumns = ['tecId', 'tecNome', 'tecDdd', 'tecTelefone', 'tecCidade', 'tecUf', 'tecEndereco', 'tecBairro', 'tecCep', 'tecLaboratorio', 'tecCrq', 'acao']

  constructor(private tecnicoService: TecnicoService) { }

  ngOnInit(): void {
    this.tecnicoService.read().subscribe(tecnicos => {
      this.tecnicos = tecnicos
      console.log(tecnicos)  
    })
  }

}
