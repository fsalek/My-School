import {Classe} from './classe';
import {Matiere} from './matiere';
import {Referent} from './referent';

export class Eleve {
  id: number;
  firstName: string;
  lastName: string;
  genre: string;
  dateNaissance: Date;
  adresse: string;
  moyenne: number;
  moyenneGeneral: number;
  observations: string;
  classe: string;
  referent: string;
  matieres: Matiere[];
}
