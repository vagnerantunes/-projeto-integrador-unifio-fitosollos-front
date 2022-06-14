import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crq } from '../crq.model';
import { CrqService } from '../crq.service';

@Component({
  selector: 'app-crq-update',
  templateUrl: './crq-update.component.html',
  styleUrls: ['./crq-update.component.css']
})
export class CrqUpdateComponent implements OnInit {

  crq!: Crq;

  constructor(private crqService: CrqService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const crqId = this.route.snapshot.paramMap.get('crqId')
    this.crqService.readById(crqId!).subscribe((crq: Crq) =>{
      this.crq = crq
    })
  }

  updateCrq(): void {
    this.crqService.update(this.crq).subscribe(() => {
      this.crqService.showMessage('Crq atualizado com sucesso!')
      this.router.navigate(['/crqs'])
    })
  }

  cancel(): void {
    this.router.navigate(['/crqs'])
  }

}

