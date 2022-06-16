import { Router, ActivatedRoute } from '@angular/router';
import { ResultadoAnaliseService } from './../resultado-analise.service';
import { Amostra } from './../../amostra/amostra.model';
import { Nematoide } from './../../nematoide/nematoide.model';
import { ResultadoAnalise } from './../resultadoAnalise.model';
import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-resultado-analise-update',
  templateUrl: './resultado-analise-update.component.html',
  styleUrls: ['./resultado-analise-update.component.css']
})
export class ResultadoAnaliseUpdateComponent implements OnInit {

  resultadoAnalise!: ResultadoAnalise;

  nematoides!: Nematoide[];
  amostras!: Amostra[];

  constructor(private resultadoAnaliseService: ResultadoAnaliseService, private dropdownService: DropdownService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resId = this.route.snapshot.paramMap.get('resId');
    this.resultadoAnaliseService.readById(resId!).subscribe(resultadoAnalise => {
      this.resultadoAnalise = resultadoAnalise
    });

    this.dropdownService.readNematoide().subscribe(dados => {
      this.nematoides = dados;
    })

    this.dropdownService.readAmostra().subscribe(dados => {
      this.amostras = dados;
    })
  }

  updateResultadoAnalise(): void{
    this.resultadoAnaliseService.update(this.resultadoAnalise).subscribe(() => {
      this.resultadoAnaliseService.showMessage("Resultado Atualizado!");
      this.cancel()
    });
  }

  cancel(): void{
    this.router.navigate(["/ranalises"]);
  }

}
