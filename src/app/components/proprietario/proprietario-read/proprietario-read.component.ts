import { Component, OnInit } from '@angular/core';
import { Proprietario } from '../proprietario.model';
import { ProprietarioService } from '../proprietario.service';

@Component({
  selector: 'app-proprietario-read',
  templateUrl: './proprietario-read.component.html',
  styleUrls: ['./proprietario-read.component.css']
})

export class ProprietarioReadComponent implements OnInit {

  proprietarios!: Proprietario[]
  displayedColumns = ['id', 'nome', 'cpfcnpj', 'ddd', 'telefone', 'cidade', 'uf', 'endereco', 'bairro', 'cep', 'acao']

  constructor(private proprietarioService: ProprietarioService) { }

  ngOnInit(): void {
    this.proprietarioService.read().subscribe(proprietarios => {
      this.proprietarios = proprietarios
      console.log(proprietarios)  
    })
  }

}

