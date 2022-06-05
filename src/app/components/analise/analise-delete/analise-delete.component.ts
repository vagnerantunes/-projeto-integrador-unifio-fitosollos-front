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
    const id = this.route.snapshot.paramMap.get('id');
    this.analiseService.readById(id!).subscribe(analise =>{
      this.analise = analise
    })
  }

  deleteAnalise(): void {
    this.analiseService.delete(this.analise.id!).subscribe(() =>{
    this.analiseService.showMessage('Tipo de analise excluido com sucesso!')  
    this.router.navigate(['/analises'])
    })
  }

  cancel(): void{
    this.router.navigate(['/analises'])
  }
}