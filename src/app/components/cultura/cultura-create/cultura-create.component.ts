import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cultura } from '../cultura.model';
import { CulturaService } from '../cultura.service';

@Component({
  selector: 'app-cultura-create',
  templateUrl: './cultura-create.component.html',
  styleUrls: ['./cultura-create.component.css']
})
export class CulturaCreateComponent implements OnInit {

  cultura: Cultura = {
    descricao: ''
  }

  constructor(private culturaService: CulturaService,
    private router: Router) { }
  
  ngOnInit(): void {
    
  }

  createCultura(): void {
    this.culturaService.create(this.cultura).subscribe(() => {
      this.culturaService.showMessage('Cultura criada!')
      this.router.navigate(['/culturas'])
    })
  }

  cancel(): void {
    this.router.navigate(['/culturas'])
  }  
}