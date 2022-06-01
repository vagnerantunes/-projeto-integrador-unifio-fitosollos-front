import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proprietario } from '../proprietario.model';
import { ProprietarioService } from '../proprietario.service';

@Component({
  selector: 'app-proprietario-update',
  templateUrl: './proprietario-update.component.html',
  styleUrls: ['./proprietario-update.component.css']
})
export class ProprietarioUpdateComponent implements OnInit {

  proprietario!: Proprietario;

  constructor(private proprietarioService: ProprietarioService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.proprietarioService.readById(id!).subscribe((proprietario: Proprietario) =>{
      this.proprietario = proprietario
    })
  }

  updateCargo(): void {
    this.proprietarioService.update(this.proprietario).subscribe(() => {
      this.proprietarioService.showMessage('Propriétario atualizado com sucesso!')
      this.router.navigate(['/proprietarios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/proprietarios'])
  }

}

