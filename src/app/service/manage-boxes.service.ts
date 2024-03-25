import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Boxes } from '../models/Boxes';
import { Panier } from '../models/Panier';


@Injectable({
  providedIn: 'root'
})
export class ManageBoxesService {



  constructor(private http:HttpClient) {}

  //méthode qui affiche les boxes
    public getBoxes(): Observable<any> {
      return this.http.get(environment.apiBaseUrl);
      }



      
}
