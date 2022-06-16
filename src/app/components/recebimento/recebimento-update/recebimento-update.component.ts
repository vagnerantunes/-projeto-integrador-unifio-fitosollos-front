import { RecebimentoService } from './../recebimento.service';
import { Amostra } from './../../amostra/amostra.model';
import { FormaPagamento } from './../../formaPagamento/formaPagamento.model';
import { Recebimento } from './../recebiment.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-recebimento-update',
  templateUrl: './recebimento-update.component.html',
  styleUrls: ['./recebimento-update.component.css']
})
export class RecebimentoUpdateComponent implements OnInit {

  recebimento!: Recebimento;

  fpagamento!: FormaPagamento[];
  amostra!: Amostra[];

  constructor(private recebimentoService: RecebimentoService, private dropdownService: DropdownService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const recId = this.route.snapshot.paramMap.get('recId');
    this.recebimentoService.readById(recId!).subscribe(recebimento => {
      this.recebimento = recebimento
    });

    this.dropdownService.readFpagamento().subscribe(dados => {
      this.fpagamento = dados;
    })

    this.dropdownService.readAmostra().subscribe(dados => {
      this.amostra = dados;
    })
  }

  updateRecebimento(): void{
    this.recebimentoService.update(this.recebimento).subscribe(() => {
      this.recebimentoService.showMessage("Recebimento Atualizado!");
      this.cancel()
    });
  }

  cancel(): void{
    this.router.navigate(["/recebimentos"]);
  }

}