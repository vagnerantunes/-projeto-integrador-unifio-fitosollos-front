import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cultura } from '../cultura.model';
import { CulturaService } from '../cultura.service';

@Component({
  selector: 'app-cultura-update',
  templateUrl: './cultura-update.component.html',
  styleUrls: ['./cultura-update.component.css']
})

export class CulturaUpdateComponent implements OnInit {

  cultura!: Cultura;

  constructor(private culturaService: CulturaService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const culId = this.route.snapshot.paramMap.get('culId')
    this.culturaService.readById(culId!).subscribe((cultura: Cultura) =>{
      this.cultura = cultura
    })
  }

  updateCultura(): void {
    this.culturaService.update(this.cultura).subscribe(() => {
      this.culturaService.showMessage('Cultura atualizada com sucesso!')
      this.router.navigate(['/culturas'])
    })
  }

  cancel(): void {
    this.router.navigate(['/culturas'])
  }

}