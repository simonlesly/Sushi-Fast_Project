import { Boxes } from "./Boxes"
import { LigneBoxes } from "./LigneBoxes"

export class Panier{
    
    id: number
    listeDeBoxe: Array<LigneBoxes>
    statut: boolean


    constructor(id: number,listeDeBoxe: Array<any>,statut: boolean) {
        this.id = id
        this.listeDeBoxe = listeDeBoxe
        this.statut =statut
    }

  

    
}