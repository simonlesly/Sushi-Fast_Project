import { Component } from '@angular/core';
import { ManageBoxesService } from '../../service/manage-boxes.service';
import { Boxes } from '../../models/Boxes';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-nosboxes',
  templateUrl: './nosboxes.component.html',
  styleUrl: './nosboxes.component.css'
})
export class NosboxesComponent {

  boxes : Array<Boxes>
  pathImage = environment.apiGetImages
  constructor(manageBoxesServices : ManageBoxesService){
    this.boxes=[]

   manageBoxesServices.getBoxes().subscribe((resultat)=>{
    this.boxes = resultat
    console.log(this.boxes)
    })
  }
}

