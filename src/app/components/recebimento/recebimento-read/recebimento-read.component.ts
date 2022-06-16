import { RecebimentoService } from './../recebimento.service';
import { Recebimento } from './../recebiment.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recebimento-read',
  templateUrl: './recebimento-read.component.html',
  styleUrls: ['./recebimento-read.component.css']
})
export class RecebimentoReadComponent implements OnInit {

  recebimentos!: Recebimento[]

  displayedColumns = ['recId', 'recValor', 'recHorario', 'recFormaPagamento', 'recAmostra', 'acao']

  constructor(private recebimentoService: RecebimentoService) { }

  ngOnInit(): void {
    this.recebimentoService.read().subscribe(recebimentos => {
      this.recebimentos = recebimentos
      console.log(recebimentos)  
    })
  }

}
