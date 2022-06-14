import { TecnicoService } from './../tecnico.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropdownService } from '../dropdown.service';
import { ResponsavelTecnico } from '../ResponsavelTecnico.model';
import { Crq } from '../../crq/crq.model';
import { Laboratorio } from '../../laboratorio/laboratorio.model';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css']
})
export class TecnicoUpdateComponent implements OnInit {

  tecnico!: ResponsavelTecnico;

  laboratorio!: Laboratorio[];
  crq!: Crq[];

  constructor(private tecnicoService: TecnicoService, private dropdownService: DropdownService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const tecId = this.route.snapshot.paramMap.get('tecId');
    this.tecnicoService.readById(tecId!).subscribe(tecnico => {
      this.tecnico = tecnico
    });

    this.dropdownService.readLaboratorio().subscribe(dados => {
      this.laboratorio = dados;
    })

    this.dropdownService.readCrq().subscribe(dados => {
      this.crq = dados;
    })
  }

  updateTecnico(): void{
    this.tecnicoService.update(this.tecnico).subscribe(() => {
      this.tecnicoService.showMessage("Técnico Atualizado!");
      this.cancel()
    });
  }

  cancel(): void{
    this.router.navigate(["/tecnicos"]);
  }

}

