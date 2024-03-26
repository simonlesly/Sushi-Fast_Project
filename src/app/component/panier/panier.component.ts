import { Component } from '@angular/core';
import { Panier } from '../../models/Panier';
import { Observable } from 'rxjs';
import { ManagePaniersService } from '../../service/manage-paniers.service';
import { Boxes } from '../../models/Boxes';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

  panier : Panier
  constructor(private managePaniersService : ManagePaniersService){
    this.panier= this.managePaniersService.getPanier()
    
  }

  
}


