export class Livre {
  idLivre!: number;
  titre!: string;
  auteur!: string;
  dateCreation: Date = new Date();
  dateEntre: Date = new Date();
  diponible!: boolean;
}
