import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recebimento-crud',
  templateUrl: './recebimento-crud.component.html',
  styleUrls: ['./recebimento-crud.component.css']
})
export class RecebimentoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRecebimentoCreate(): void{
    this.router.navigate(['/recebimentos/create'])
  }

}
