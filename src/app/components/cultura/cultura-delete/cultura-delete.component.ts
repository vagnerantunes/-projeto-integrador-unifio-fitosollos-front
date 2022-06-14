import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cultura } from '../cultura.model';
import { CulturaService } from '../cultura.service';

@Component({
  selector: 'app-cultura-delete',
  templateUrl: './cultura-delete.component.html',
  styleUrls: ['./cultura-delete.component.css']
})
export class CulturaDeleteComponent implements OnInit {

  cultura!: Cultura;

  constructor(
    private culturaService: CulturaService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const culId = this.route.snapshot.paramMap.get('culId');
    this.culturaService.readById(culId!).subscribe(cultura =>{
      this.cultura = cultura
    })
  }

  deleteCultura(): void {
    this.culturaService.delete(this.cultura.culId!).subscribe(() =>{
    this.culturaService.showMessage('Cultura excluida com sucesso!')  
    this.router.navigate(['/culturas'])
    })
  }

  cancel(): void{
    this.router.navigate(['/culturas'])
  }
}