import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ContentComponent } from './components/template/content/content.component';
import { TemplateComponent } from './components/template/template/template.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { ListBorrowedBooksComponent } from './components/list-borrowed-books/list-borrowed-books.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TemplateComponent,
    SigninComponent,
    HomeComponent,
    ListStudentComponent,
    ListAdminsComponent,
    ListBorrowedBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
