import { Router } from '@angular/router';
import { ResultadoAnaliseService } from './../resultado-analise.service';
import { Amostra } from './../../amostra/amostra.model';
import { Nematoide } from './../../nematoide/nematoide.model';
import { ResultadoAnalise } from './../resultadoAnalise.model';
import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-resultado-analise-create',
  templateUrl: './resultado-analise-create.component.html',
  styleUrls: ['./resultado-analise-create.component.css']
})
export class ResultadoAnaliseCreateComponent implements OnInit {

  resultadoAnalise: ResultadoAnalise = {
    resQtdSolo: 0,
    resQtdRaiz: 0,
    resQtdOvos: 0,
    resNematoide: 0,
    resAmostra: 0
  }

  nematoide!: Nematoide[];

  amostra!: Amostra[];
  
  constructor(private resultadoAnaliseService: ResultadoAnaliseService, private router: Router, private dropdownService: DropdownService ) { }

  ngOnInit(): void {
    this.dropdownService.readNematoide().subscribe(dadosNematoide => {
      this.nematoide = dadosNematoide;
      console.log(dadosNematoide);      
    });

    this.dropdownService.readAmostra().subscribe(dadosAmostra => {
      this.amostra = dadosAmostra;
      console.log(dadosAmostra);      
    });
   
  }

  createResultadoAnalise():void{
    this.resultadoAnaliseService.create(this.resultadoAnalise).subscribe(() => {this.resultadoAnaliseService.showMessage("Resultado de analise inserido!")});
    this.ngOnInit();
    this.cancel();    
  }

  cancel(): void{
    this.router.navigate(["/precos"]);
  }
}
