import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabelaPreco } from '../TabelaPreco.model';
import { PrecoService } from '../preco.service';
import { Laboratorio } from '../../laboratorio/laboratorio.model';
import { TipoAnalise } from '../../analise/TipoAnalise.model';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-precos-create',
  templateUrl: './precos-create.component.html',
  styleUrls: ['./precos-create.component.css']
})
export class PrecosCreateComponent implements OnInit {

  preco: TabelaPreco = {
    tabValor: 0,
    tabAnalise: 0,
    tabLaboratorio: 0
  }

  laboratorio!: Laboratorio[];

  analise!: TipoAnalise[];
  
  constructor(private precoService: PrecoService, private router: Router, private dropdownService: DropdownService ) { }

  ngOnInit(): void {
    this.dropdownService.readAnalise().subscribe(dadosAnalise => {
      this.analise = dadosAnalise;
      console.log(dadosAnalise);      
    });

    this.dropdownService.readLaboratorio().subscribe(dadosLaboratorio => {
      this.laboratorio = dadosLaboratorio;
      console.log(dadosLaboratorio);      
    });
   
  }

  createPreco():void{
    this.precoService.create(this.preco).subscribe(() => {this.precoService.showMessage("Preço criado!")});
    this.ngOnInit();
    this.cancel();    
  }

  cancel(): void{
    this.router.navigate(["/precos"]);
  }
}
