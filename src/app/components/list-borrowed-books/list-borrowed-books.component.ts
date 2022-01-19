import { Component, OnInit } from '@angular/core';
import {EmpruntService} from "../../services/emprunt.service";
import {Emprunt} from "../../model/emprunt";
import {Etudiant} from "../../model/etudiant";
import {LivreService} from "../../services/livre.service";
import {EtudiantService} from "../../services/etudiant.service";
import {Livre} from "../../model/livre";

@Component({
  selector: 'app-list-borrowed-books',
  templateUrl: './list-borrowed-books.component.html',
  styleUrls: ['./list-borrowed-books.component.css']
})
export class ListBorrowedBooksComponent implements OnInit {

  emprunt: Emprunt = new Emprunt();
  methode = "Modifier";
  listEmprunts: Emprunt[] | undefined ;
  listEtds: Etudiant[] | undefined ;
  listLivres: Livre[] | undefined ;
  constructor(private empruntService: EmpruntService,private livreService: LivreService,private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getListEmprunts();
  }
  affecter(): void{
    this.methode = "Ajouter";
  }
  getListEmprunts() {
    this.empruntService.getEmprunts().subscribe( next => {
      this.listEmprunts = next;
    })
    this.etudiantService.getEtudiants().subscribe(next =>{
      this.listEtds=next;
    })
    this.livreService.getLivres().subscribe(next=> {
      this.listLivres=next;
    })
  }
  selectedValue(emprunt: Emprunt): void {

    this.emprunt = emprunt;
    this.methode = "Modifier";
    //console.log("swiwsiw" + this.emprunt.idEmprunt);
  }
  supprimer(emprunt: Emprunt){
    this.empruntService.deleteEmprunt(emprunt).subscribe(next => {
      console.log(next);
      this.getListEmprunts();
    })
  }
  ajouter() {

    this.emprunt.empruntPK.dateEmprunt= new Date();
    console.log(this.emprunt)
    if (this.methode === "Ajouter") {
      this.empruntService.addEmprunt(this.emprunt,this.emprunt.empruntPK.idLivre,this.emprunt.empruntPK.idEtd).subscribe(next => {
        if (next !== null) {
          console.log("emprunt ajouté");
          this.getListEmprunts();
        }
      })
    }
    else{
      this.empruntService.updateEmprunt(this.emprunt,this.emprunt.empruntPK.idLivre,this.emprunt.empruntPK.idEtd).subscribe(next => {
        if (next !== null) {
          console.log("emprunt modifié")
          this.getListEmprunts();
        }
      })
    }
  }

  getNomLivre(idLi: any) : any{
    if(this.listLivres!=undefined){
      return this.listLivres.find(element => element.idLivre === idLi)
    }

  }

  getEtudiant(idEtd: any):any {
    if(this.listEtds!=undefined){
      return (this.listEtds.find(element => element.idEtd===idEtd))
    }
  }

  Retour(emprunt: any) {

    emprunt.dateRetourRee= new Date();
    this.empruntService.updateEmprunt(emprunt,emprunt.empruntPK.idLivre,emprunt.empruntPK.idEtd).subscribe(next => {
      console.log(emprunt.dateRetourRee)
      if (next !== null) {
        console.log("emprunt modifié")
        this.getListEmprunts();
      }
    })

  }
}
