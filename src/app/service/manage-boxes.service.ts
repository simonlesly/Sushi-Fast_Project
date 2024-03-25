import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boxes } from '../modules/Boxes';
import { Panier } from '../modules/Panier';

@Injectable({
  providedIn: 'root'
})
export class ManageBoxesService {

  constructor(private http:HttpClient) {}

//methode qui récupère les boxes
    public getBoxes(): Observable<any> {
      return this.http.get(environment.apiBaseUrl);
      }

//methode qui ajoute les boxes au panier
public addBoxes() {}




//methode qui supprime les boxes du panier
public delete() {}




//methode qui consulte le contenue ldu panier
public getPanier() {
  let panier= Panier
  return panier
}



//methode qui calcule le prix du panier
public pricePanier() {}



}
    
  
