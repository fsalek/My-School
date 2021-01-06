import {Eleve} from './eleve';

export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  lienEleve: string;
  adresse: string;
  phone: string;
  eleves: Eleve[];
}
