import { Component, OnInit } from '@angular/core';
import { Crq } from '../crq.model';
import { CrqService } from '../crq.service';

@Component({
  selector: 'app-crq-read',
  templateUrl: './crq-read.component.html',
  styleUrls: ['./crq-read.component.css']
})
export class CrqReadComponent implements OnInit {

  crqs!: Crq[]
  displayedColumns = ['crqId', 'crqDescricao', 'acao']

  constructor(private crqService: CrqService) { }

  ngOnInit(): void {
    this.crqService.read().subscribe(crqs => {
      this.crqs = crqs
      console.log(crqs)  
    })
  }

}