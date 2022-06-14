import { Component, OnInit } from '@angular/core';
import { Cultura } from '../cultura.model';
import { CulturaService } from '../cultura.service';

@Component({
  selector: 'app-cultura-read',
  templateUrl: './cultura-read.component.html',
  styleUrls: ['./cultura-read.component.css']
})
export class CulturaReadComponent implements OnInit {

  culturas!: Cultura[]
  displayedColumns = ['culId', 'culDecricao', 'acao']

  constructor(private culturaService: CulturaService) { }

  ngOnInit(): void {
    this.culturaService.read().subscribe(culturas => {
      this.culturas = culturas
      console.log(culturas)  
    })
  }

}
