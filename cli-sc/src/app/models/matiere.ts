import {Professeur} from './professeur';

export class Matiere {
  id: number;
  name: string;
  coeficient: number;
  selected: boolean;
  profs: Professeur[];
}
