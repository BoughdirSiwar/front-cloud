import { Component, OnInit } from '@angular/core';
import {Livre} from "../../model/livre";
import {LivreService} from "../../services/livre.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  livre: Livre = new Livre();
  methode = "Modifier";
  listLivre: Livre[] | undefined ;
  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.getListLivres();
  }
  affecter(): void{
    this.methode = "Ajouter";
  }
  getListLivres() {
    this.livreService.getLivres().subscribe( next => {
      console.log(next);
      this.listLivre = next;
    })
  }
  selectedValue(livre: Livre): void {

    this.livre = livre;
    console.log("swiwsiw" + this.livre.idLivre);
  }
  supprimer(livre: Livre){
    this.livreService.deleteLivre(livre.idLivre).subscribe(next => {
      console.log(next);
      this.getListLivres();
    })
  }
  ajouter() {
    if (this.methode === "Ajouter") {
      this.livreService.addLivre(this.livre).subscribe(next => {
        if (next !== null) {
          console.log("Livre ajouté");
          this.getListLivres();
        }
      })
    }
    else{
      this.livreService.updateLivre(this.livre).subscribe(next => {
        if (next !== null) {
          console.log("Livre modifié")
          this.getListLivres();
        }
      })
    }
  }
}
