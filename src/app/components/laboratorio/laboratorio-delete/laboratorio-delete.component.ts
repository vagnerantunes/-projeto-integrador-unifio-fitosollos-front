import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laboratorio } from '../laboratorio.model';
import { LaboratorioService } from '../laboratorio.service';

@Component({
  selector: 'app-laboratorio-delete',
  templateUrl: './laboratorio-delete.component.html',
  styleUrls: ['./laboratorio-delete.component.css']
})
export class LaboratorioDeleteComponent implements OnInit {

  laboratorio!: Laboratorio;

  constructor(
    private laboratorioService: LaboratorioService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.laboratorioService.readById(id!).subscribe(laboratorio =>{
      this.laboratorio = laboratorio
    })
  }

  deleteLaboratorio(): void {
    this.laboratorioService.delete(this.laboratorio.id!).subscribe(() =>{
    this.laboratorioService.showMessage('Laboratório excluido com sucesso!')  
    this.router.navigate(['/laboratorios'])
    })
  }

  cancel(): void{
    this.router.navigate(['/laboratorios'])
  }
}