import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoAnalise } from '../TipoAnalise.model';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'app-analise-delete',
  templateUrl: './analise-delete.component.html',
  styleUrls: ['./analise-delete.component.css']
})
export class AnaliseDeleteComponent implements OnInit {

  analise!: TipoAnalise;

  constructor(
    private analiseService: AnaliseService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const tipId = this.route.snapshot.paramMap.get('tipId');
    this.analiseService.readById(tipId!).subscribe(analise =>{
      this.analise = analise
    })
  }

  deleteAnalise(): void {
    this.analiseService.delete(this.analise.tipId!).subscribe(() =>{
    this.analiseService.showMessage('Tipo de analise excluido com sucesso!')  
    this.router.navigate(['/analises'])
    })
  }

  cancel(): void{
    this.router.navigate(['/analises'])
  }
}