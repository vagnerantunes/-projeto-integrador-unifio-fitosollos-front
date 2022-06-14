import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabelaPreco } from '../TabelaPreco.model';
import { PrecoService } from '../preco.service';

@Component({
  selector: 'app-precos-delete',
  templateUrl: './precos-delete.component.html',
  styleUrls: ['./precos-delete.component.css']
})
export class PrecosDeleteComponent implements OnInit {

  preco!: TabelaPreco;

  constructor(
    private precoService: PrecoService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const tabId = this.route.snapshot.paramMap.get('tabId');
    this.precoService.readById(tabId!).subscribe(preco =>{
      this.preco = preco
    })
  }

  deletePreco(): void {
    this.precoService.delete(this.preco.tabId!).subscribe(() =>{
    this.precoService.showMessage('Preço excluido com sucesso!')  
    this.cancel();
    })
  }

  cancel(): void{
    this.router.navigate(['/precos'])
  }
}
