import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { FormaPagamento } from '../formaPagamento.model';

@Component({
  selector: 'app-forma-pagamento-delete',
  templateUrl: './forma-pagamento-delete.component.html',
  styleUrls: ['./forma-pagamento-delete.component.css']
})
export class FormaPagamentoDeleteComponent implements OnInit {

  pagamento!: FormaPagamento;

  constructor(
    private pagamentoService: FormaPagamentoService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const fpgId = this.route.snapshot.paramMap.get('fpgId');
    this.pagamentoService.readById(fpgId!).subscribe(pagamento =>{
      this.pagamento = pagamento
    })
  }

  deletePagamento(): void {
    this.pagamentoService.delete(this.pagamento.fpgId!).subscribe(() =>{
    this.pagamentoService.showMessage('Forma de pagamento excluida com sucesso!')  
    this.router.navigate(['/pagamentos'])
    })
  }

  cancel(): void{
    this.router.navigate(['/pagamentos'])
  }
}
