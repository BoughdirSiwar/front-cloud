import { Component, OnInit } from '@angular/core';
import {EmpruntService} from "../../services/emprunt.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public datahist: any[] = [] ;
  trim1!: number;
  trim2!: number;
  trim3!: number;
  trim4!: number;
  public data: any[] = [];
  label: string[] = ["Emp en cours" , "Emp en retard", "Emp dans les delais"]
   nbenretard!: number;
   nbencours!: number;
   nbdelai!: number;

  public labelContent(e: any): string {
    return e.category;
  }
  constructor(private empruntService: EmpruntService) { }

  ngOnInit(): void {
    this.empruntService.nbEmpByMonth("01-01-2022", "31-03-2022").subscribe(next => {
      this.trim1 = next;
      console.log(this.trim1);
    });
    this.empruntService.nbEmpByMonth("01-04-2022", "30-06-2022").subscribe(next => {
      this.trim2 = next;
      console.log(this.trim2);
    });
    this.empruntService.nbEmpByMonth("01-07-2022", "30-09-2022").subscribe(next => {
      this.trim3 = next;
      console.log(this.trim3);
    });
    this.empruntService.nbEmpByMonth("01-10-2022", "31-12-2022").subscribe(next => {
      this.trim4 = next;
      this.datahist = [this.trim1, this.trim2, this.trim3, this.trim4];
    });
    this.empruntService.nbEmpEnCours().subscribe(next => {
      this.nbencours = next;
      console.log(next);
    });
    this.empruntService.nbEmpEnRetard().subscribe(next => {
      this.nbenretard = next;
      console.log(next);
    });
    this.empruntService.nbEmpDansDelai().subscribe(next => {
      this.nbdelai = next;
      console.log(next);
      console.log("aa" + this.nbencours);
       this.data = [
        {
          kind: "Emp en cours",
          share: this.nbencours,
        },
        {
          kind: "Emp en retard",
          share: this.nbenretard,
        },
        {
          kind: "Emp dans delai",
          share: this.nbdelai,
        },
      ];
     /* this.data =[
        {
          kind: this.nbencours,
          share: "Emp en cours"
        }]*/
    });


  }


}
