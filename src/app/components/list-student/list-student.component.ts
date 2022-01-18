import { Component, OnInit } from '@angular/core';
import {EtudiantService} from "../../services/etudiant.service";
import {Etudiant} from "../../model/etudiant";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  etudiant: Etudiant = new Etudiant();
  methode = "Modifier";
  listEtudiants: Etudiant[] | undefined ;
  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getListEtudiants();
  }
  affecter(): void{
    this.methode = "Ajouter";
  }
  getListEtudiants() {
    this.etudiantService.getEtudiants().subscribe( next => {
      console.log(next);
      this.listEtudiants = next;
    })
  }
  selectedValue(etudiant: Etudiant): void {

    this.etudiant = etudiant;
    console.log("swiwsiw" + this.etudiant.nom);
  }
  supprimer(etudiant: Etudiant){
    this.etudiantService.deleteEtudiant(etudiant.idEtd).subscribe(next => {
      console.log(next);
      this.getListEtudiants();
    })
  }
  ajouter() {
    if (this.methode === "Ajouter") {
      this.etudiantService.addEtudiant(this.etudiant).subscribe(next => {
        if (next !== null) {
          console.log("Admin ajouté");
        }
      })
    }
    else{
      this.etudiantService.updateEtudiant(this.etudiant).subscribe(next => {
        if (next !== null) {
          console.log("Admin modifié")
          this.getListEtudiants();
        }
      })
    }
  }
}
