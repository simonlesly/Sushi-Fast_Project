import { Boxes } from "./Boxes"

export class Panier{
    id: number
    listeDeBoxe: Array<Boxes>
    prix:number
    statut:boolean

    constructor(id:number,listeDeBoxe: Array <Boxes>, prix: number, statut:boolean,){
        this.id= id
        this.listeDeBoxe= listeDeBoxe
        this.prix= prix
        this.statut= statut
    }
}