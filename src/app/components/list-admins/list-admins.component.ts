import { Component, OnInit } from '@angular/core';
import {Admin} from "../../model/admin";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css']
})
export class ListAdminsComponent implements OnInit {
  admin: Admin = new Admin();
  methode = "Modifier";
  listAdmins: Admin[] | undefined ;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getListAdmin();
  }
  affecter(): void{
    this.methode = "Ajouter";
  }
  getListAdmin() {
    this.adminService.getAdmins().subscribe( next => {
      console.log(next);
      this.listAdmins = next;
    })
    }
  selectedValue(admin: Admin): void {

    this.admin = admin;
    console.log("swiwsiw" + this.admin.nom);
  }
  supprimer(admin: Admin){
    console.log(admin.idAdmin);
    this.adminService.deleteAdmin(admin.idAdmin).subscribe(next => {
      console.log(next);
      this.getListAdmin();
    })
  }
  ajouter() {
    if (this.methode === "Ajouter") {
      this.adminService.addAdmin(this.admin).subscribe(next => {
        if (next !== null) {
          console.log("Admin ajouté");
        }
      })
    }
    else{
      this.adminService.updateAdmin(this.admin).subscribe(next => {
      if (next !== null) {
        console.log("Admin modifié")
      }
      })
    }
  }
}
