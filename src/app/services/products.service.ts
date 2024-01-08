import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  products: Product[] = [
    new Product(
      "Bmw",
      "M3",
      80000,
      "https://cdn.automobile-propre.com/uploads/2023/09/BMW-M3.jpg",
      0,
      "Like",
      new Date(),
      false,
      ["XS", "S", "M", "L"]
    ),
    new Product(
      "Mercedes",
      "CLA45s",
      80000,
      "https://cdn.automobile-propre.com/uploads/2023/09/BMW-M3.jpg",
      0,
      "Like",
      new Date("2022/12/15"),
      true,
      ["XS", "S", "M", "L"]
    ),
    new Product(
      "AUDI",
      "RS6",
      80000,
      "https://cdn.automobile-propre.com/uploads/2023/09/BMW-M3.jpg",
      0,
      "Like",
      new Date("2023/10/05"),
      false,
      ["XS", "S", "M", "L"]
    ),
  ];
  constructor() {}

  getAllProducts() {
    return this.products;
  }

  onLikeProduct(product: Product) {
    if (product.likes === 0) {
      product.btnValue = "Unlike";

      product.likes++;
    } else {
      product.btnValue = "Like";
      product.likes--;
    }
  }
}
