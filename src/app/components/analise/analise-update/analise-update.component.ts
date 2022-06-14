import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoAnalise } from '../TipoAnalise.model';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'app-analise-update',
  templateUrl: './analise-update.component.html',
  styleUrls: ['./analise-update.component.css']
})
export class AnaliseUpdateComponent implements OnInit {

  analise!: TipoAnalise;

  constructor(private analiseService: AnaliseService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const tipId = this.route.snapshot.paramMap.get('tipId')
    this.analiseService.readById(tipId!).subscribe((analise: TipoAnalise) =>{
      this.analise = analise
    })
  }

  updateAnlise(): void {
    this.analiseService.update(this.analise).subscribe(() => {
      this.analiseService.showMessage('Tipo de analise atualizado com sucesso!')
      this.router.navigate(['/analises'])
    })
  }

  cancel(): void {
    this.router.navigate(['/analises'])
  }

}
