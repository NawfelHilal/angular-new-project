export class Product {
  public marque!: string;
  public modele!: string;
  public prix!: number;
  public imageUrl!: string;
  public likes: number = 0;
  public btnValue!: string;
  public date!: Date;
  public size?: Array<string>;

  constructor(
    marque: string,
    modele: string,
    prix: number,
    imageUrl: string,
    likes: number,
    btnValue: string,
    date: Date,
    size?: Array<string>
  ) {
    this.marque = marque;
    this.modele = modele;
    this.prix = prix;
    this.imageUrl = imageUrl;
    this.likes = likes;
    this.btnValue = btnValue;
    this.size = size;
    this.date = date;
  }
}
