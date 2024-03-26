import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Panier } from '../modules/Panier';
import { Boxes } from '../modules/Boxes';
import { LigneBoxes } from '../modules/LigneBoxes';

@Injectable({
  providedIn: 'root'
})
export class ManagePaniersService {
panier:Panier
  constructor() { 
    this. panier =JSON.parse(localStorage.getItem("panier") ?? "{'id':1,'listeDeBox':[],'statut':false}")
   
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
  

//méthode pour afficher statut du panier 
public statutPanier(){}

} 

