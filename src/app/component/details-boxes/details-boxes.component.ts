import { Component } from '@angular/core';
import { ManageBoxesService } from '../../service/manage-boxes.service';
import { Boxes } from '../../models/Boxes';

@Component({
  selector: 'app-details-boxes',
  templateUrl: './details-boxes.component.html',
  styleUrl: './details-boxes.component.css'
})
export class DetailsBoxesComponent {
  boxes : Array<Boxes>
  constructor(manageBoxesServices : ManageBoxesService){
    this.boxes=[]

   manageBoxesServices.getBoxes().subscribe((resultat)=>{
    this.boxes = resultat
    console.log(this.boxes)
    
    })
  }

}
