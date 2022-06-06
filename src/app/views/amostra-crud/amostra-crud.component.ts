import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amostra-crud',
  templateUrl: './amostra-crud.component.html',
  styleUrls: ['./amostra-crud.component.css']
})
export class AmostraCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAmostraCreate(): void{
    this.router.navigate(['/amostras/create'])
  }

}
