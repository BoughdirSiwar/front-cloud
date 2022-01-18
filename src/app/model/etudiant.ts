 export class Etudiant {
   idEtd!: number;
   nom!: string;
   prenom!: string;
   dateNaissance: Date = new Date();
   dateInscrit: Date = new Date();
   idAdmin!: number;
 }
