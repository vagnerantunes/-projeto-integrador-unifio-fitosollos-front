import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmostraService } from '../amostra.service';
import { Amostra } from '../amostra.model';
import { DropdownService } from '../dropdown.service';
import { Usuario } from '../../usuario/usuario.model';
import { TipoAnalise } from '../../analise/TipoAnalise.model';
import { Cultura } from '../../cultura/cultura.model';
import { Proprietario } from '../../proprietario/proprietario.model';
import { ResponsavelTecnico } from '../../tecnico/ResponsavelTecnico.model';
import { Laboratorio } from '../../laboratorio/laboratorio.model';

@Component({
  selector: 'app-amostra-update',
  templateUrl: './amostra-update.component.html',
  styleUrls: ['./amostra-update.component.css']
})
export class AmostraUpdateComponent implements OnInit {

  amostra!: Amostra;

  usuarios!: Usuario[];
  analises!: TipoAnalise[];
  culturas!: Cultura[];
  proprietarios!: Proprietario[];
  tecnicos!: ResponsavelTecnico[];
  laboratorios!: Laboratorio[];

  constructor(private amostraService: AmostraService, private dropdownService: DropdownService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const amoId = this.route.snapshot.paramMap.get('amoId');
    this.amostraService.readById(amoId!).subscribe(amostra => {
      this.amostra = amostra
    });

    this.dropdownService.readUsuario().subscribe(dados => {
      this.usuarios = dados;
    })

    this.dropdownService.readAnalise().subscribe(dados => {
      this.analises = dados;
    })

    this.dropdownService.readCultura().subscribe(dados => {
      this.culturas = dados;
    })

    this.dropdownService.readProprietario().subscribe(dados => {
      this.proprietarios = dados;
    })

    this.dropdownService.readTecnico().subscribe(dados => {
      this.tecnicos = dados;
    })

    this.dropdownService.readLaboratorio().subscribe(dados => {
      this.laboratorios = dados;
    })
  }

  updateAmostra(): void{
    this.amostraService.update(this.amostra).subscribe(() => {
      this.amostraService.showMessage("Amostra Atualizado!");
      this.cancel()
    });
  }

  cancel(): void{
    this.router.navigate(["/amostras"]);
  }

}
