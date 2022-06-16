import { Router, ActivatedRoute } from '@angular/router';
import { ResultadoAnaliseService } from './../resultado-analise.service';
import { ResultadoAnalise } from './../resultadoAnalise.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-analise-delete',
  templateUrl: './resultado-analise-delete.component.html',
  styleUrls: ['./resultado-analise-delete.component.css']
})
export class ResultadoAnaliseDeleteComponent implements OnInit {

  resultadoAnalise!: ResultadoAnalise;

  constructor(
    private resultadoAnaliseService: ResultadoAnaliseService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resId = this.route.snapshot.paramMap.get('resId');
    this.resultadoAnaliseService.readById(resId!).subscribe(resultadoAnalise =>{
      this.resultadoAnalise = resultadoAnalise
    })
  }

  deleteResultado(): void {
    this.resultadoAnaliseService.delete(this.resultadoAnalise.resId!).subscribe(() =>{
    this.resultadoAnaliseService.showMessage('Resultado excluido com sucesso!')  
    this.cancel();
    })
  }

  cancel(): void{
    this.router.navigate(['/ranalises'])
  }
}
