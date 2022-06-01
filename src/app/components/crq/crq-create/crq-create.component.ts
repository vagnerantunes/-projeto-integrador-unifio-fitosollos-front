import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crq } from '../crq.model';
import { CrqService } from '../crq.service';

@Component({
  selector: 'app-crq-create',
  templateUrl: './crq-create.component.html',
  styleUrls: ['./crq-create.component.css']
})
export class CrqCreateComponent implements OnInit {

  crq: Crq = {
    descricao: ''
  }

  constructor(private crqService: CrqService,
    private router: Router) { }
  
  ngOnInit(): void {
    
  }

  createCrq(): void {
    this.crqService.create(this.crq).subscribe(() => {
      this.crqService.showMessage('Crq criado!')
      this.router.navigate(['/crqs'])
    })
  }

  cancel(): void {
    this.router.navigate(['/crqs'])
  }  
}
