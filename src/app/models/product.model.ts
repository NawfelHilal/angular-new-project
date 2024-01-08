export class Product {
  public marque!: string;
  public modele!: string;
  public prix!: number;
  public imageUrl!: string;
  public description: string;
  public likes: number = 0;
  public btnValue!: string;
  public date!: Date;
  public isFavorite: boolean = false;
  public size?: Array<string>;

  constructor(
    marque: string,
    modele: string,
    prix: number,
    imageUrl: string,
    description: string,
    likes: number,
    btnValue: string,
    date: Date,
    isFavorite: boolean,
    size?: Array<string>
  ) {
    this.marque = marque;
    this.modele = modele;
    this.prix = prix;
    this.imageUrl = imageUrl;
    this.description = description;
    this.likes = likes;
    this.btnValue = btnValue;
    this.date = date;
    this.isFavorite = isFavorite;
    this.size = size;
  }
}
