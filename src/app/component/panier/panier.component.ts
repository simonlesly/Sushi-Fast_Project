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
  calculerTotalCommande: any;
  constructor(private managePaniersService : ManagePaniersService){
    this.panier= this.managePaniersService.getPanier()
  }
// Fonction pour avoir le prix total du Panier
getPrix(){
  let prix=0
  for (const uneLigne of this.panier.listeDeBoxe){
    prix+=uneLigne.boxe.prix * uneLigne.qte
  }
  return prix.toFixed(2)
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
// Fonction pour augmenter la quantité de boxe
  augmenter(uneLigne : LigneBoxes){
    this.managePaniersService.increasePanier(uneLigne.boxe)
    this.panier = this.managePaniersService.getPanier()
  }


  promo(): void {
    const seuilPromotion = 35; // Définir le seuil de la promotion (35€)

    // Calculer le total de la commande en parcourant chaque ligne du panier
    let totalCommande = 0;
    for (const uneLigne of this.panier.listeDeBoxe) {
        totalCommande += uneLigne.boxe.prix * uneLigne.qte; // Ajouter le prix de chaque boxe multiplié par sa quantité au total
    }

    // Appliquer la promotion si le total de la commande atteint ou dépasse 35€
    if (totalCommande >= seuilPromotion) {
        // Sélectionner une boxe du panier de manière aléatoire
        const randomIndex = Math.floor(Math.random() * this.panier.listeDeBoxe.length);
        const boxOfferte = this.panier.listeDeBoxe[randomIndex]; // Sélectionner une boxe aléatoire dans le panier

        // Augmenter la quantité de la boxe offerte de 1
        boxOfferte.qte++; // Ajouter une unité à la quantité de la boxe sélectionnée, la rendant ainsi gratuite
    }
}

}
   
  
  
  
  
  
  
  
 

