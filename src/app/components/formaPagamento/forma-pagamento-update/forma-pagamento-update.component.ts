import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { FormaPagamento } from '../formaPagamento.model';

@Component({
  selector: 'app-forma-pagamento-update',
  templateUrl: './forma-pagamento-update.component.html',
  styleUrls: ['./forma-pagamento-update.component.css']
})

export class FormaPagamentoUpdateComponent implements OnInit {

  pagamento!: FormaPagamento;

  constructor(private pagamentoService: FormaPagamentoService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const fpgId = this.route.snapshot.paramMap.get('fpgId')
    this.pagamentoService.readById(fpgId!).subscribe((pagamento: FormaPagamento) =>{
      this.pagamento = pagamento
    })
  }

  updatePagamento(): void {
    this.pagamentoService.update(this.pagamento).subscribe(() => {
      this.pagamentoService.showMessage('Forma de pagamento atualizado com sucesso!')
      this.router.navigate(['/pagamentos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/pagamentos'])
  }

}
