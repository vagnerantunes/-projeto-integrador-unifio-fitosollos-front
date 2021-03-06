import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laboratorio } from '../laboratorio.model';
import { LaboratorioService } from '../laboratorio.service';

@Component({
  selector: 'app-laboratorio-update',
  templateUrl: './laboratorio-update.component.html',
  styleUrls: ['./laboratorio-update.component.css']
})
export class LaboratorioUpdateComponent implements OnInit {

  laboratorio!: Laboratorio;

  constructor(private laboratorioService: LaboratorioService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const labId = this.route.snapshot.paramMap.get('labId')
    this.laboratorioService.readById(labId!).subscribe((laboratorio: Laboratorio) =>{
      this.laboratorio = laboratorio
    })
  }

  updateLaboratorio(): void {
    this.laboratorioService.update(this.laboratorio).subscribe(() => {
      this.laboratorioService.showMessage('Laboratório atualizado com sucesso!')
      this.router.navigate(['/laboratorios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/laboratorios'])
  }

}