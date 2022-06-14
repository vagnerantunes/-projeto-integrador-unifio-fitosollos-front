import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proprietario } from '../proprietario.model';
import { ProprietarioService } from '../proprietario.service';

@Component({
  selector: 'app-proprietario-create',
  templateUrl: './proprietario-create.component.html',
  styleUrls: ['./proprietario-create.component.css']
})
export class ProprietarioCreateComponent implements OnInit {

  proprietario: Proprietario = {
    proNome: '',
    proCpfCnpj: '',
    proDdd: '',
    proTelefone: '',
    proCidade: '',
    proUf: '',
    proEndereco: '',
    proBairro: '',
    proCep: ''
  }

  constructor(private proprietarioService: ProprietarioService,
    private router: Router) { }
  
  ngOnInit(): void {    
  }

  createProprietario(): void {
    this.proprietarioService.create(this.proprietario).subscribe(() => {
      this.proprietarioService.showMessage('Proprietario criado!')
      this.router.navigate(['/proprietarios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/proprietarios'])
  } 
}
