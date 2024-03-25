import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Panier } from '../models/Panier';
import { Boxes } from '../models/Boxes';

@Injectable({
  providedIn: 'root'
})
export class ManagePaniersService {
panier:Panier
  constructor() { 
    this.panier=new Panier(1,[],false)
  }
  //méthode pour consulter le contenue du panier
  public getPanier(){
  
    return this.panier
  }

//méthode pour ajouter une boxe au panier
  public addBoxes(){}

//méthode pour supprimer une boxe du panier
  public deleteBoxes(){}


} 
