import { Component } from '@angular/core';
import { ManageBoxesService } from '../../service/manage-boxes.service';
import { Boxes } from '../../models/Boxes';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ManagePaniersService } from '../../service/manage-paniers.service';
import { Panier } from '../../models/Panier';

@Component({
  selector: 'app-nosboxes',
  templateUrl: './nosboxes.component.html',
  styleUrl: './nosboxes.component.css'
})
export class NosboxesComponent {

  boxes : Array<Boxes>
  pathImage = environment.apiGetImages
  constructor(private manageBoxesServices : ManageBoxesService, private panierService:ManagePaniersService){
    this.boxes=[]

   manageBoxesServices.getBoxes().subscribe((resultat)=>{
    this.boxes = resultat
    console.log(this.boxes)
    })
  }

  ajouter(uneBox:Boxes){
    this.panierService.addBoxes(uneBox,1)
   
  }
}

