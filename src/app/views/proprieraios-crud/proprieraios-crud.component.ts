import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proprieraios-crud',
  templateUrl: './proprieraios-crud.component.html',
  styleUrls: ['./proprieraios-crud.component.css']
})
export class ProprieraiosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProprietarioCreate(): void{
    this.router.navigate(['/proprietarios/create'])
  }

}
