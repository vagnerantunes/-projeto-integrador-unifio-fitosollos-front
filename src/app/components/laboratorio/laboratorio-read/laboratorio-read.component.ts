import { Component, OnInit } from '@angular/core';
import { Laboratorio } from '../laboratorio.model';
import { LaboratorioService } from '../laboratorio.service';

@Component({
  selector: 'app-laboratorio-read',
  templateUrl: './laboratorio-read.component.html',
  styleUrls: ['./laboratorio-read.component.css']
})

export class LaboratorioReadComponent implements OnInit {

  laboratorio!: Laboratorio[]
  displayedColumns = ['id', 'cnpj', 'endereco', 'telefone', 'acao']

  constructor(private laboratorioService: LaboratorioService) { }

  ngOnInit(): void {
    this.laboratorioService.read().subscribe(laboratorio => {
      this.laboratorio = laboratorio
      console.log(laboratorio)  
    })
  }

}