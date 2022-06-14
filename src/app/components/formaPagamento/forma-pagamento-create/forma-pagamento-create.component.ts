import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { FormaPagamento } from '../formaPagamento.model';

@Component({
  selector: 'app-forma-pagamento-create',
  templateUrl: './forma-pagamento-create.component.html',
  styleUrls: ['./forma-pagamento-create.component.css']
})
export class FormaPagamentoCreateComponent implements OnInit {

  formaPagamento: FormaPagamento = {
    fpgDescricao: ''
  }

  //importando productService
  constructor(private formaPagamentoService: FormaPagamentoService,
    private router: Router) { }
  
  ngOnInit(): void {
    
  }

  createPagamento(): void {
    this.formaPagamentoService.create(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma de pagamento criada!')
      this.router.navigate(['/pagamentos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/pagamentos'])
  }  
}
