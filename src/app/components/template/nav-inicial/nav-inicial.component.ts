import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-inicial',
  templateUrl: './nav-inicial.component.html',
  styleUrls: ['./nav-inicial.component.css']
})
export class NavInicialComponent implements OnInit {
 
  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}