import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-analise-crud',
  templateUrl: './tipo-analise-crud.component.html',
  styleUrls: ['./tipo-analise-crud.component.css']
})
export class TipoAnaliseCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAnaliseCreate(): void{
    this.router.navigate(['/analises/create'])
  }

}
