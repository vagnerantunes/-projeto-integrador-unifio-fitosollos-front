import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado-analise-crud',
  templateUrl: './resultado-analise-crud.component.html',
  styleUrls: ['./resultado-analise-crud.component.css']
})
export class ResultadoAnaliseCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToResultadoAnaliseCreate(): void{
    this.router.navigate(['/ranalises/create'])
  }

}
