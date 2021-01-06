import {Eleve} from './eleve';

export class Referent {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  lienEleve: string;
  adresse: string;
  phone: string;
  eleves: Eleve[];
}
