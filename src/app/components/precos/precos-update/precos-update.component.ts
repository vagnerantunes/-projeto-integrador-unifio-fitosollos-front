import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabelaPreco } from '../TabelaPreco.model';
import { PrecoService } from '../preco.service';
import { Laboratorio } from '../../laboratorio/laboratorio.model';
import { TipoAnalise } from '../../analise/TipoAnalise.model';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-precos-update',
  templateUrl: './precos-update.component.html',
  styleUrls: ['./precos-update.component.css']
})
export class PrecosUpdateComponent implements OnInit {

  preco!: TabelaPreco;

  laboratorios!: Laboratorio[];
  analises!: TipoAnalise[];

  constructor(private precoService: PrecoService, private dropdownService: DropdownService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.precoService.readById(id!).subscribe(preco => {
      this.preco = preco
    });

    this.dropdownService.readLaboratorio().subscribe(dados => {
      this.laboratorios = dados;
    })

    this.dropdownService.readAnalise().subscribe(dados => {
      this.analises = dados;
    })
  }

  updatePreco(): void{
    this.precoService.update(this.preco).subscribe(() => {
      this.precoService.showMessage("Preço Atualizado!");
      this.cancel()
    });
  }

  cancel(): void{
    this.router.navigate(["/precos"]);
  }

}
