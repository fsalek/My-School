import {Niveau} from './niveau';
import {Professeur} from './professeur';
import {Eleve} from './eleve';

export class Classe {
  id: number;
  name: string;
  selected: boolean;
  nbEleves: number;
  niv: string;
  eleves: Eleve[];
  professeurs: Professeur[];
}
