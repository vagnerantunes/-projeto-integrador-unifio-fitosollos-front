import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoAnalise } from '../TipoAnalise.model';
import { AnaliseService } from './../analise.service';

@Component({
  selector: 'app-analise-create',
  templateUrl: './analise-create.component.html',
  styleUrls: ['./analise-create.component.css']
})
export class AnaliseCreateComponent implements OnInit {

  analise: TipoAnalise = {
    tipDescricao: ''
  }

  constructor(private analiserService: AnaliseService,
    private router: Router) { }
  
  ngOnInit(): void {    
  }

  createAnalise(): void {
    this.analiserService.create(this.analise).subscribe(() => {
      this.analiserService.showMessage('Analise criada!')
      this.router.navigate(['/analises'])
    })
  }

  cancel(): void {
    this.router.navigate(['/analises'])
  }  
}

