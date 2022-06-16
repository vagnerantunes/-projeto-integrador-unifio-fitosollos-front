import { ResultadoAnaliseService } from './../resultado-analise.service';
import { ResultadoAnalise } from './../resultadoAnalise.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-analise-read',
  templateUrl: './resultado-analise-read.component.html',
  styleUrls: ['./resultado-analise-read.component.css']
})
export class ResultadoAnaliseReadComponent implements OnInit {

  resultadoAnalise!: ResultadoAnalise[]
  displayedColumns = ['resId', 'resQtdSolo', 'resQtdRaiz', 'resQtdOvos', 'resNematoide', 'resAmostra', 'acao']

  constructor(private resultadoAnaliseService: ResultadoAnaliseService) { }

  ngOnInit(): void {
    this.resultadoAnaliseService.read().subscribe(resultadoAnalise => {
      this.resultadoAnalise = resultadoAnalise
      console.log(resultadoAnalise)  
    })
  }

}
