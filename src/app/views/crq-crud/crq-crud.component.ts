import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crq-crud',
  templateUrl: './crq-crud.component.html',
  styleUrls: ['./crq-crud.component.css']
})
export class CrqCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCrqCreate(): void{
    this.router.navigate(['/crqs/create'])
  }

}
