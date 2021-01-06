import {Classe} from './classe';
import {Matiere} from './matiere';

export class Professeur {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  adresse: string;
  nbreHeure: number;
  selected: boolean;
  phone: string;
  matiere: string;
  classes: Classe[];
}
