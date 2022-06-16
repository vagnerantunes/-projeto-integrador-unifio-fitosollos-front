import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recebimento } from '../recebiment.model';
import { FormaPagamento } from '../../formaPagamento/formaPagamento.model';
import { Amostra } from '../../amostra/amostra.model';
import { RecebimentoService } from './../recebimento.service';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-recebimento-create',
  templateUrl: './recebimento-create.component.html',
  styleUrls: ['./recebimento-create.component.css']
})
export class RecebimentoCreateComponent implements OnInit {

  recebimento: Recebimento = {
    recValor: 0,
    recHorario: new Date(),
    recAmostra: 1,
    recFormaPagamento: 1
  }

  fpagamento!: FormaPagamento[];

  amostra!: Amostra[];
  
  constructor(private recebimentoService: RecebimentoService, private router: Router, private dropdownService: DropdownService ) { }

  ngOnInit(): void {
    this.dropdownService.readFpagamento().subscribe(dadosFPagamento => {
      this.fpagamento = dadosFPagamento;
      console.log(dadosFPagamento);      
    });

    this.dropdownService.readAmostra().subscribe(dadosAmostra => {
      this.amostra = dadosAmostra;
      console.log(dadosAmostra);      
    });
   
  }

  createPreco():void{
    this.recebimentoService.create(this.recebimento).subscribe(() => {this.recebimentoService.showMessage("Recebimento criado!")});
    this.ngOnInit();
    this.cancel();    
  }

  cancel(): void{
    this.router.navigate(["/recebimentos"]);
  }
}
