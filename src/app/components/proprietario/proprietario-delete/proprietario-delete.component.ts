import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proprietario } from '../proprietario.model';
import { ProprietarioService } from '../proprietario.service';

@Component({
  selector: 'app-proprietario-delete',
  templateUrl: './proprietario-delete.component.html',
  styleUrls: ['./proprietario-delete.component.css']
})
export class ProprietarioDeleteComponent implements OnInit {

  proprietario!: Proprietario;

  constructor(
    private proprietarioService: ProprietarioService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const proId = this.route.snapshot.paramMap.get('proId');
    this.proprietarioService.readById(proId!).subscribe(proprietario =>{
      this.proprietario = proprietario
    })
  }

  deleteProprietario(): void {
    this.proprietarioService.delete(this.proprietario.proId!).subscribe(() =>{
    this.proprietarioService.showMessage('Proprietario excluido com sucesso!')  
    this.router.navigate(['/proprietarios'])
    })
  }

  cancel(): void{
    this.router.navigate(['/proprietarios'])
  }
}
