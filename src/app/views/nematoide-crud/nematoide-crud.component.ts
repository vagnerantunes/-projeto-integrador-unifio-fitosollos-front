import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nematoide-crud',
  templateUrl: './nematoide-crud.component.html',
  styleUrls: ['./nematoide-crud.component.css']
})
export class NematoideCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToNematoideCreate(): void{
    this.router.navigate(['/nematoides/create'])
  }

}
