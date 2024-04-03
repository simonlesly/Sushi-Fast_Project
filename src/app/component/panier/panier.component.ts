import { Component } from '@angular/core';
import { Panier } from '../../models/Panier';
import { ManagePaniersService } from '../../service/manage-paniers.service';


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

  getPrix(){
    return this.managePaniersService.getPrix()
  }
  
}


