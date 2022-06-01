import { Component, OnInit } from '@angular/core';
import { Nematoide } from '../nematoide.model';
import { NematoideService } from '../nematoide.service';

@Component({
  selector: 'app-nematoide-read',
  templateUrl: './nematoide-read.component.html',
  styleUrls: ['./nematoide-read.component.css']
})
export class NematoideReadComponent implements OnInit {

  nematoides!: Nematoide[]
  displayedColumns = ['id', 'descricao', 'acao']

  constructor(private nematoideService: NematoideService) { }

  ngOnInit(): void {
    this.nematoideService.read().subscribe(nematoides => {
      this.nematoides = nematoides
      console.log(nematoides)  
    })
  }

}