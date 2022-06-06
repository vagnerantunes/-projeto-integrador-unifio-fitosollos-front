import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TecnicoService } from '../tecnico.service';
import { ResponsavelTecnico } from '../ResponsavelTecnico.model';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {

  tecnico!: ResponsavelTecnico;

  constructor(
    private tecnicoService: TecnicoService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tecnicoService.readById(id!).subscribe(tecnico =>{
      this.tecnico = tecnico
    })
  }

  deleteTecnico(): void {
    this.tecnicoService.delete(this.tecnico.id!).subscribe(() =>{
    this.tecnicoService.showMessage('Técnico excluido com sucesso!')  
    this.cancel();
    })

  }

  cancel(): void{
    this.router.navigate(['/tecnicos'])
  }
}