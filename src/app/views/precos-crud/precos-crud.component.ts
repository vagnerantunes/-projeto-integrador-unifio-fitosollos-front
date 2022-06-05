import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precos-crud',
  templateUrl: './precos-crud.component.html',
  styleUrls: ['./precos-crud.component.css']
})
export class PrecosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPrecosCreate(): void{
    this.router.navigate(['/precos/create'])
  }

}
