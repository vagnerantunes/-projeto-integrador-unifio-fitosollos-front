import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NematoideService } from '../nematoide.service';
import { Nematoide } from './../nematoide.model';

@Component({
  selector: 'app-nematoide-create',
  templateUrl: './nematoide-create.component.html',
  styleUrls: ['./nematoide-create.component.css']
})
export class NematoideCreateComponent implements OnInit {

  nematoide: Nematoide = {
    nemDescricao: ''
  }

  constructor(private nematoideService: NematoideService,
    private router: Router) { }
  
  ngOnInit(): void {    
  }

  createNematoide(): void {
    this.nematoideService.create(this.nematoide).subscribe(() => {
      this.nematoideService.showMessage('Nematoide criado!')
      this.router.navigate(['/nematoides'])
    })
  }

  cancel(): void {
    this.router.navigate(['/nematoides'])
  }  
}
