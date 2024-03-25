import { Boxes } from "./Boxes"

export class Panier{
    
    id: number
    listeDeBoxe: Array<any>

    statut: boolean


    constructor(id: number,listeDeBoxe: Array<any>,statut: boolean) {
        this.id = id
        this.listeDeBoxe = listeDeBoxe
   
        this.statut =statut
    }

    getPrix(){
        let prix =0
        for (const uneLigne of this.listeDeBoxe) {
            prix+=uneLigne.prix * uneLigne.quantite
        }
        return prix
    }
}