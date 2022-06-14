import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NematoideService } from '../nematoide.service';
import { Nematoide } from './../nematoide.model';

@Component({
  selector: 'app-nematoide-delete',
  templateUrl: './nematoide-delete.component.html',
  styleUrls: ['./nematoide-delete.component.css']
})
export class NematoideDeleteComponent implements OnInit {

  nematoide!: Nematoide;

  constructor(
    private nematoideService: NematoideService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const nemId = this.route.snapshot.paramMap.get('nemId');
    this.nematoideService.readById(nemId!).subscribe(nematoide =>{
      this.nematoide = nematoide
    })
  }

  deleteNematoide(): void {
    this.nematoideService.delete(this.nematoide.nemId!).subscribe(() =>{
    this.nematoideService.showMessage('Nematoide excluido com sucesso!')  
    this.router.navigate(['/nematoides'])
    })
  }

  cancel(): void{
    this.router.navigate(['/nematoides'])
  }
}
