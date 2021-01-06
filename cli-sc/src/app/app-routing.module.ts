import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ClassesComponent} from './components/classe/classes/classes.component';
import {NewClasseComponent} from './components/classe/new-classe/new-classe.component';
import {HomeComponent} from './components/home/home.component';
import {NiveauxComponent} from './components/niveau/niveaux/niveaux.component';
import {NewNiveauComponent} from './components/niveau/new-niveau/new-niveau.component';
import {MyScoolComponent} from './components/my-scool/my-scool.component';
import {ElevesComponent} from './components/eleve/eleves/eleves.component';
import {NewEleveComponent} from './components/eleve/new-eleve/new-eleve.component';
import {NewProfesseurComponent} from './components/professeur/new-professeur/new-professeur.component';
import {NewMatiereComponent} from './components/matiere/new-matiere/new-matiere.component';
import {ProfesseursComponent} from './components/professeur/professeurs/professeurs.component';
import {MatieresComponent} from './components/matiere/matieres/matieres.component';
import {EditNiveauComponent} from './components/niveau/edit-niveau/edit-niveau.component';
import {DetailNiveauComponent} from './components/niveau/detail-niveau/detail-niveau.component';
import {UsersComponent} from './components/auth/users/users.component';
import {EditClasseComponent} from './components/classe/edit-classe/edit-classe.component';
import {EditEleveComponent} from './components/eleve/edit-eleve/edit-eleve.component';
import {DetailEleveComponent} from './components/eleve/detail-eleve/detail-eleve.component';
import {EditProfesseurComponent} from './components/professeur/edit-professeur/edit-professeur.component';
import {DetailProfesseurComponent} from './components/professeur/detail-professeur/detail-professeur.component';
import {EditMatiereComponent} from './components/matiere/edit-matiere/edit-matiere.component';
import {DetailMatiereComponent} from './components/matiere/detail-matiere/detail-matiere.component';
import {NewUserComponent} from './components/auth/new-user/new-user.component';
import {EditUserComponent} from './components/auth/edit-user/edit-user.component';
import {DetailUserComponent} from './components/auth/detail-user/detail-user.component';
import {ContactsComponent} from './components/contact/contacts/contacts.component';
import {NewContactComponent} from './components/contact/new-contact/new-contact.component';
import {EditContactComponent} from './components/contact/edit-contact/edit-contact.component';
import {DetailContactComponent} from './components/contact/detail-contact/detail-contact.component';
import {DetailClasseComponent} from './components/classe/detail-classe/detail-classe.component';
import {ReferentsComponent} from './components/referent/referents/referents.component';
import {NewReferentComponent} from './components/referent/new-referent/new-referent.component';
import {EditReferentComponent} from './components/referent/edit-referent/edit-referent.component';
import {DetailReferentComponent} from './components/referent/detail-referent/detail-referent.component';


const routes: Routes = [
  { path: '', redirectTo: 'my-scool', pathMatch: 'full'},
  { path: 'my-scool', component: MyScoolComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'classes', component: ClassesComponent},
  { path: 'new-classe', component: NewClasseComponent},
  { path: 'edit-classe/:id', component: EditClasseComponent},
  { path: 'classe/:id', component: DetailClasseComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'new-contact', component: NewContactComponent},
  { path: 'edit-contact/:id', component: EditContactComponent},
  { path: 'contact/:id', component: DetailContactComponent},
  { path: 'referents', component: ReferentsComponent},
  { path: 'new-referent', component: NewReferentComponent},
  { path: 'edit-referent/:id', component: EditReferentComponent},
  { path: 'referent/:id', component: DetailReferentComponent},
  { path: 'niveaux', component: NiveauxComponent},
  { path: 'new-niveau', component: NewNiveauComponent},
  { path: 'edit-niveau/:id', component: EditNiveauComponent},
  { path: 'niveau/:id', component: DetailNiveauComponent},
  { path: 'eleves', component: ElevesComponent},
  { path: 'new-eleve', component: NewEleveComponent},
  { path: 'edit-eleve/:id', component: EditEleveComponent},
  { path: 'eleve/:id', component: DetailEleveComponent},
  { path: 'professeurs', component: ProfesseursComponent},
  { path: 'new-professeur', component: NewProfesseurComponent},
  { path: 'edit-professeur/:id', component: EditProfesseurComponent},
  { path: 'professeur/:id', component: DetailProfesseurComponent},
  { path: 'matieres', component: MatieresComponent},
  { path: 'new-matiere', component: NewMatiereComponent},
  { path: 'edit-matiere/:id', component: EditMatiereComponent},
  { path: 'matiere/:id', component: DetailMatiereComponent},
  { path: 'users', component: UsersComponent},
  { path: 'new-user', component: NewUserComponent},
  { path: 'edit-user/:id', component: EditUserComponent},
  { path: 'user/:id', component: DetailUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
