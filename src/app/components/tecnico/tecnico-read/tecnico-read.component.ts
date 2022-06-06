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
  displayedColumns = ['id', 'nome', 'ddd', 'telefone', 'cidade', 'uf', 'endereco', 'bairro', 'cep', 'laboratorio', 'crq', 'acao']

  constructor(private tecnicoService: TecnicoService) { }

  ngOnInit(): void {
    this.tecnicoService.read().subscribe(tecnicos => {
      this.tecnicos = tecnicos
      console.log(tecnicos)  
    })
  }

}
