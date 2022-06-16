import { Component, OnInit } from '@angular/core';
import { AmostraService } from '../amostra.service';
import { Amostra } from '../amostra.model';

@Component({
  selector: 'app-amostra-read',
  templateUrl: './amostra-read.component.html',
  styleUrls: ['./amostra-read.component.css']
})
export class AmostraReadComponent implements OnInit {

  amostras!: Amostra[]
  displayedColumns = ['amoId', 'amoDescricao', 'amoChegada', 'amoSaida', 'amoPeso', 'amoFinalizada', 'amoCancelada', 'amoUsuario', 'amoAnalise', 'amoCultura', 'amoProprietario', 'amoTecnico', 'amoLaboratorio', 'acao']

  constructor(private amostraService: AmostraService) { }

  ngOnInit(): void {
    this.amostraService.read().subscribe(amostras => {
      this.amostras = amostras
      console.log(amostras)  
    })
  }
  

}
