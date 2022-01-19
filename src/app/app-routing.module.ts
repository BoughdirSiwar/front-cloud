import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateComponent} from "./components/template/template/template.component";
import {SigninComponent} from "./components/signin/signin.component";
import {LivreComponent} from "./components/livre/livre.component";
import {ListStudentComponent} from "./components/list-student/list-student.component";
import {ListAdminsComponent} from "./components/list-admins/list-admins.component";
import {ListBorrowedBooksComponent} from "./components/list-borrowed-books/list-borrowed-books.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'livre', component: LivreComponent},
  {path: 'list-student', component: ListStudentComponent},
  {path: 'list-admins', component: ListAdminsComponent},
  {path: 'list-borrowed-books', component: ListBorrowedBooksComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
