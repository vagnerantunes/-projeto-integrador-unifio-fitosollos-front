import { Component, OnInit } from '@angular/core';
import { TabelaPreco } from '../TabelaPreco.model';
import { PrecoService } from '../preco.service';

@Component({
  selector: 'app-precos-read',
  templateUrl: './precos-read.component.html',
  styleUrls: ['./precos-read.component.css']
})
export class PrecosReadComponent implements OnInit {

  precos!: TabelaPreco[]
  displayedColumns = ['tabId', 'tabValor', 'tabLaboratorio', 'tabAnalise', 'acao']

  constructor(private precoService: PrecoService) { }

  ngOnInit(): void {
    this.precoService.read().subscribe(precos => {
      this.precos = precos
      console.log(precos)  
    })
  }

}
