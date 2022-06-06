import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recebimento } from '../recebiment.model';
import { FormaPagamento } from '../../formaPagamento/formaPagamento.model';
import { RecebimentoService } from './../recebimento.service';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-recebimento-create',
  templateUrl: './recebimento-create.component.html',
  styleUrls: ['./recebimento-create.component.css']
})
export class RecebimentoCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
