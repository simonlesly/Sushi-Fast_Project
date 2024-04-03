import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Panier } from '../models/Panier';
import { Boxes } from '../models/Boxes';
import { LigneBoxes } from '../models/LigneBoxes';

@Injectable({
  providedIn: 'root'
})
export class ManagePaniersService {
panier:Panier
  constructor() { 
    this. panier =JSON.parse(localStorage.getItem("panier") ?? JSON.stringify(new Panier(1,[],true)))
   
  }
  //méthode pour consulter le contenue du panier
  public getPanier(){
    return this.panier
  }

//méthode pour ajouter une boxe au panier
  public addBoxes(uneBox:Boxes,qte:number){
    //TODO
    let estPresente=false
    console.log(this.panier)
    //ETAPE 1 : Parcourir le panier pour savoir si la boxe il y est deja 
    for (let uneLigne of this.panier.listeDeBoxe) {
      if(uneLigne.boxe.id == uneBox.id){// Si oui alors tu modifie la quantite  et estPresnte devient true
        uneLigne.qte++
        estPresente = true
      }//Fin de la boucle

    }
    if(!estPresente) {//Si estPresente est faux
      let nouvelleLigne= new LigneBoxes(uneBox,qte)
      this.panier.listeDeBoxe.push(nouvelleLigne)
  }
  localStorage.setItem("panier",JSON.stringify(this.panier))
  console.log(this.panier)
    return this.panier.listeDeBoxe
  }

//méthode pour supprimer une boxe du panier

public deleteBoxe(uneBox: Boxes) {


  // Récupérer le panier actuel depuis le stockage local
  let panier: Panier = JSON.parse(localStorage.getItem("panier") ?? JSON.stringify(new Panier(1, [], true)));

  // Rechercher l'élément à supprimer dans le panier en utilisant son identifiant
  const itemToDeleteId: number = uneBox.id; // ID de l'élément à supprimer
  const index = panier.listeDeBoxe.findIndex(uneLigne => uneLigne.boxe.id === itemToDeleteId);

  // Si l'élément est trouvé, le supprimer du panier
  if (index !== -1) {
    panier.listeDeBoxe.splice(index, 1);
  }
  this.panier = panier

  // Mettre à jour le panier dans le stockage local avec la nouvelle version du panier
  localStorage.setItem("panier", JSON.stringify(panier));

}

public reducePanier(uneBox : Boxes){
 

  // Rechercher l'élément à réduire dans le panier en utilisant son identifiant
  const itemToReduceQte: number = uneBox.id; // ID de l'élément à réduire
  const index = this.panier.listeDeBoxe.findIndex(uneLigne => uneLigne.boxe.id === itemToReduceQte);
  let qte=0
  for (let uneLigne of this.panier.listeDeBoxe) {
    if (uneLigne.boxe.id == uneBox.id) {// Si oui alors tu modifie la quantite
      uneLigne.qte--
    qte=uneLigne.qte
    }//Fin de la boucle
  }
  if(qte<1){
        this.panier.listeDeBoxe.splice(index,1)
  }


  // Mettre à jour le panier dans le stockage local avec la nouvelle version du panier
  localStorage.setItem("panier", JSON.stringify(this.panier));
}

  

//méthode pour afficher statut du panier 
public statutPanier(){}




} 