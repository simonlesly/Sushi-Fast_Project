import { Component } from '@angular/core';
import { Panier } from '../../modules/Panier';
import { ManagePaniersService} from '../../service/manage-paniers.service';
import { LigneBoxes } from '../../modules/LigneBoxes';

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
  // Fonction pour supprimer une boxe
  supprimer(uneLigne : LigneBoxes){
    this.managePaniersService.deleteBoxe(uneLigne.boxe)
    this.panier = this.managePaniersService.getPanier()
  }
// Fonction pour reduire la quantité de boxe
  reduire(uneLigne : LigneBoxes){
    this.managePaniersService.reducePanier(uneLigne.boxe)
    this.panier = this.managePaniersService.getPanier()
  }
}
