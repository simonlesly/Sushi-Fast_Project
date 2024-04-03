import { Component } from '@angular/core';
import { Panier } from '../../models/Panier';
import { ManagePaniersService } from '../../service/manage-paniers.service';
import { LigneBoxes } from '../../models/LigneBoxes';


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

  supprimer(uneLigne : LigneBoxes){
    this.managePaniersService.deleteBoxe(uneLigne.boxe)
    this.panier = this.managePaniersService.getPanier()
  }

  reduire(uneLigne : LigneBoxes){
    this.managePaniersService.reducePanier(uneLigne.boxe)
    this.panier = this.managePaniersService.getPanier()
  }
  
}


