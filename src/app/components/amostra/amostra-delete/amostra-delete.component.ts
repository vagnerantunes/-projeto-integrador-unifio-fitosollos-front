import { Router, ActivatedRoute } from '@angular/router';
import { AmostraService } from './../amostra.service';
import { Amostra } from './../amostra.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amostra-delete',
  templateUrl: './amostra-delete.component.html',
  styleUrls: ['./amostra-delete.component.css']
})
export class AmostraDeleteComponent implements OnInit {

  amostra!: Amostra;

  constructor(
    private amostraService: AmostraService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const amoId = this.route.snapshot.paramMap.get('amoId');
    this.amostraService.readById(amoId!).subscribe(amostra =>{
      this.amostra = amostra
    })
  }

  deleteTecnico(): void {
    this.amostraService.delete(this.amostra.amoId!).subscribe(() =>{
    this.amostraService.showMessage('Amostra excluido com sucesso!')  
    this.cancel();
    })

  }

  cancel(): void{
    this.router.navigate(['/amostras'])
  }
}