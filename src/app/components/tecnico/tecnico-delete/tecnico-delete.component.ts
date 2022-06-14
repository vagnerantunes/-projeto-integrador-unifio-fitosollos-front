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
    const tecId = this.route.snapshot.paramMap.get('tecId');
    this.tecnicoService.readById(tecId!).subscribe(tecnico =>{
      this.tecnico = tecnico
    })
  }

  deleteTecnico(): void {
    this.tecnicoService.delete(this.tecnico.tecId!).subscribe(() =>{
    this.tecnicoService.showMessage('Técnico excluido com sucesso!')  
    this.cancel();
    })

  }

  cancel(): void{
    this.router.navigate(['/tecnicos'])
  }
}