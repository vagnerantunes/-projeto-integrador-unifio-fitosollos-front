import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnico-crud',
  templateUrl: './tecnico-crud.component.html',
  styleUrls: ['./tecnico-crud.component.css']
})
export class TecnicoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToTecnicoCreate(): void{
    this.router.navigate(['/tecnicos/create'])
  }
}
