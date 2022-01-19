import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ContentComponent } from './components/template/content/content.component';
import { TemplateComponent } from './components/template/template/template.component';
import { SigninComponent } from './components/signin/signin.component';
import { LivreComponent } from './components/livre/livre.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { ListBorrowedBooksComponent } from './components/list-borrowed-books/list-borrowed-books.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {HomeComponent} from "./components/home/home.component";




// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TemplateComponent,
    SigninComponent,
    LivreComponent,
    ListStudentComponent,
    ListAdminsComponent,
    ListBorrowedBooksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
