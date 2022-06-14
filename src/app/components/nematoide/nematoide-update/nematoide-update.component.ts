import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nematoide } from '../nematoide.model';
import { NematoideService } from '../nematoide.service';

@Component({
  selector: 'app-nematoide-update',
  templateUrl: './nematoide-update.component.html',
  styleUrls: ['./nematoide-update.component.css']
})
export class NematoideUpdateComponent implements OnInit {

  nematoide!: Nematoide;

  constructor(private nematoideService: NematoideService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const nemId = this.route.snapshot.paramMap.get('nemId')
    this.nematoideService.readById(nemId!).subscribe((nematoide: Nematoide) =>{
      this.nematoide = nematoide
    })
  }

  updateNematoide(): void {
    this.nematoideService.update(this.nematoide).subscribe(() => {
      this.nematoideService.showMessage('Nematoide atualizado com sucesso!')
      this.router.navigate(['/nematoides'])
    })
  }

  cancel(): void {
    this.router.navigate(['/nematoides'])
  }

}