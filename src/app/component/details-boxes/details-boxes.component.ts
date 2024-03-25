import { Component } from '@angular/core';
import { ManageBoxesService } from '../../service/manage-boxes.service';
import { Boxes } from '../../modules/Boxes';

@Component({
  selector: 'app-details-boxes',
  templateUrl: './details-boxes.component.html',
  styleUrl: './details-boxes.component.css'
})
export class DetailsBoxesComponent {

  boxes: Array<Boxes>
  constructor(private manageBoxesService: ManageBoxesService){
  this.boxes = []

  this.manageBoxesService.getBoxes().subscribe((resultat)=>{
  console.log(this.boxes)
  this.boxes = resultat

})
}

}
