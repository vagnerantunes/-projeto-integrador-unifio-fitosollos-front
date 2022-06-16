import { Router, ActivatedRoute } from '@angular/router';
import { RecebimentoService } from './../recebimento.service';
import { Recebimento } from './../recebiment.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recebimento-delete',
  templateUrl: './recebimento-delete.component.html',
  styleUrls: ['./recebimento-delete.component.css']
})
export class RecebimentoDeleteComponent implements OnInit {

  recebimento!: Recebimento;

  constructor(
    private recebimentoService: RecebimentoService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const recId = this.route.snapshot.paramMap.get('recId');
    this.recebimentoService.readById(recId!).subscribe(recebimento =>{
      this.recebimento = recebimento
    })
  }

  deleteRecebimento(): void {
    this.recebimentoService.delete(this.recebimento.recId!).subscribe(() =>{
    this.recebimentoService.showMessage('Recebimento excluido com sucesso!')  
    this.cancel();
    })
  }

  cancel(): void{
    this.router.navigate(['/recebimentos'])
  }

}