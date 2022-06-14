import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaboratorioService } from '../laboratorio.service';
import { Laboratorio } from '../laboratorio.model';

@Component({
  selector: 'app-laboratorio-create',
  templateUrl: './laboratorio-create.component.html',
  styleUrls: ['./laboratorio-create.component.css']
})
export class LaboratorioCreateComponent implements OnInit {

  laboratorio: Laboratorio = {
    labRazaoSocial: '',
    labNomeFantasia: '',
    labCnpj: '',
    labEndereco: '',
    labTelefone: ''
  }

  constructor(private laboratorioService: LaboratorioService,
    private router: Router) { }
  
  ngOnInit(): void {
    
  }

  createLaboratorio(): void {
    this.laboratorioService.create(this.laboratorio).subscribe(() => {
      this.laboratorioService.showMessage('Laboratório criado!')
      this.router.navigate(['/laboratorios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/laboratorios'])
  }  
}
