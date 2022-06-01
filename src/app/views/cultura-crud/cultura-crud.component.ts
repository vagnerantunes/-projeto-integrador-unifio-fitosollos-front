import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cultura-crud',
  templateUrl: './cultura-crud.component.html',
  styleUrls: ['./cultura-crud.component.css']
})
export class CulturaCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCulturaCreate(): void{
    this.router.navigate(['/culturas/create'])
  }

}
