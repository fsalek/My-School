import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClassesComponent } from './components/classe/classes/classes.component';
import { NewClasseComponent } from './components/classe/new-classe/new-classe.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { NiveauxComponent } from './components/niveau/niveaux/niveaux.component';
import { NewNiveauComponent } from './components/niveau/new-niveau/new-niveau.component';
import { MyScoolComponent } from './components/my-scool/my-scool.component';
import { ElevesComponent } from './components/eleve/eleves/eleves.component';
import { NewEleveComponent } from './components/eleve/new-eleve/new-eleve.component';
import { NewProfesseurComponent } from './components/professeur/new-professeur/new-professeur.component';
import { NewMatiereComponent } from './components/matiere/new-matiere/new-matiere.component';
import { MatieresComponent } from './components/matiere/matieres/matieres.component';
import { ProfesseursComponent } from './components/professeur/professeurs/professeurs.component';
import { EditNiveauComponent } from './components/niveau/edit-niveau/edit-niveau.component';
import { DetailNiveauComponent } from './components/niveau/detail-niveau/detail-niveau.component';
import { DetailClasseComponent } from './components/classe/detail-classe/detail-classe.component';
import { EditClasseComponent } from './components/classe/edit-classe/edit-classe.component';
import { EditEleveComponent } from './components/eleve/edit-eleve/edit-eleve.component';
import { DetailEleveComponent } from './components/eleve/detail-eleve/detail-eleve.component';
import { DetailMatiereComponent } from './components/matiere/detail-matiere/detail-matiere.component';
import { EditMatiereComponent } from './components/matiere/edit-matiere/edit-matiere.component';
import { EditProfesseurComponent } from './components/professeur/edit-professeur/edit-professeur.component';
import { DetailProfesseurComponent } from './components/professeur/detail-professeur/detail-professeur.component';
import { UsersComponent } from './components/auth/users/users.component';
import { NewUserComponent } from './components/auth/new-user/new-user.component';
import { DetailUserComponent } from './components/auth/detail-user/detail-user.component';
import { EditUserComponent } from './components/auth/edit-user/edit-user.component';
import { ContactsComponent } from './components/contact/contacts/contacts.component';
import { EditContactComponent } from './components/contact/edit-contact/edit-contact.component';
import { DetailContactComponent } from './components/contact/detail-contact/detail-contact.component';
import { NewContactComponent } from './components/contact/new-contact/new-contact.component';
import { ReferentsComponent } from './components/referent/referents/referents.component';
import { NewReferentComponent } from './components/referent/new-referent/new-referent.component';
import { EditReferentComponent } from './components/referent/edit-referent/edit-referent.component';
import { DetailReferentComponent } from './components/referent/detail-referent/detail-referent.component';
import {CommonModule} from '@angular/common';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ClassesComponent,
    NewClasseComponent,
    HomeComponent,
    NiveauxComponent,
    NewNiveauComponent,
    MyScoolComponent,
    ElevesComponent,
    NewEleveComponent,
    NewProfesseurComponent,
    NewMatiereComponent,
    MatieresComponent,
    ProfesseursComponent,
    EditNiveauComponent,
    DetailNiveauComponent,
    DetailClasseComponent,
    EditClasseComponent,
    EditEleveComponent,
    DetailEleveComponent,
    DetailMatiereComponent,
    EditMatiereComponent,
    EditProfesseurComponent,
    DetailProfesseurComponent,
    UsersComponent,
    NewUserComponent,
    DetailUserComponent,
    EditUserComponent,
    ContactsComponent,
    EditContactComponent,
    DetailContactComponent,
    NewContactComponent,
    ReferentsComponent,
    NewReferentComponent,
    EditReferentComponent,
    DetailReferentComponent,
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
