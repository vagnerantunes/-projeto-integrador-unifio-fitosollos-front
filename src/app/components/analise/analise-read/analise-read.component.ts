import { Component, OnInit } from '@angular/core';
import { TipoAnalise } from '../TipoAnalise.model';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'app-analise-read',
  templateUrl: './analise-read.component.html',
  styleUrls: ['./analise-read.component.css']
})
export class AnaliseReadComponent implements OnInit {

  analises!: TipoAnalise[]
  displayedColumns = ['id', 'descricao', 'acao']

  constructor(private analiseService: AnaliseService) { }

  ngOnInit(): void {
    this.analiseService.read().subscribe(analises => {
      this.analises = analises
      console.log(analises)  
    })
  }

}