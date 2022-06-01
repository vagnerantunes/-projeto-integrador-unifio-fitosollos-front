import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Crq } from '../crq.model';
import { CrqService } from '../crq.service';

@Component({
  selector: 'app-crq-delete',
  templateUrl: './crq-delete.component.html',
  styleUrls: ['./crq-delete.component.css']
})
export class CrqDeleteComponent implements OnInit {

  crq!: Crq;

  constructor(
    private crqService: CrqService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crqService.readById(id!).subscribe(crq =>{
      this.crq = crq
    })
  }

  deleteCrq(): void {
    this.crqService.delete(this.crq.id!).subscribe(() =>{
    this.crqService.showMessage('Crq excluida com sucesso!')  
    this.router.navigate(['/crqs'])
    })
  }

  cancel(): void{
    this.router.navigate(['/crqs'])
  }
}