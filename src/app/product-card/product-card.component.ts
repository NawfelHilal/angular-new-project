import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../models/product.model";
import { CommonModule, NgFor, NgIf } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { ProductsService } from "../services/products.service";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    CommonModule,
    ProductCardComponent,
    MatCardModule,
    MatIconModule,
  ],
  styleUrls: ["./product-card.component.css"],
  template: `
    <mat-card class="example-card">
      <mat-card-header class="header">
        <mat-card-title>{{ myProduct.marque | uppercase }}</mat-card-title>
        <mat-card-subtitle>{{
          myProduct.modele | uppercase
        }}</mat-card-subtitle>
        <button class="favicon" (click)="toggleFavorite(myProduct)">
          <mat-icon>{{
            myProduct.isFavorite ? "favorite" : "favorite_border"
          }}</mat-icon>
        </button>
      </mat-card-header>
      <img
        class="img"
        mat-card-image
        src="{{ myProduct.imageUrl }}"
        alt="Photo of a Shiba Inu"
      />
      <mat-card-content>
        {{ myProduct.description }}
      </mat-card-content>
      <mat-card-actions>
        <div class="info-card">
          <!-- <b>{{ myProduct.likes }}</b>
          <button mat-button (click)="onLike()">
            {{ myProduct.btnValue }}
          </button> -->
          <div *ngIf="myProduct.size">
            <label for="size-select">Choisissez une couleur:</label>
            <select id="size-select" [(ngModel)]="selectedSize">
              <option *ngFor="let size of myProduct.size" [value]="size">
                {{ size }}
              </option>
            </select>
          </div>
        </div>
        <br />
        <div class="priceDate">
          <div>{{ myProduct.prix | currency : "EUR" }}</div>
          <div class="date">
            {{ myProduct.date | date : "YYYY/MM/dd" }}
          </div>
        </div>
      </mat-card-actions>
    </mat-card>
  `,
  styles: ``,
})
export class ProductCardComponent {
  @Input() myProduct!: Product;
  selectedSize: string = "";

  constructor(private productService: ProductsService) {}

  onLike() {
    this.productService.onLikeProduct(this.myProduct);
  }
  toggleFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;

    let favoriteProducts: Product[] = JSON.parse(
      localStorage.getItem("favoriteProducts") || "[]"
    );

    const index = favoriteProducts.findIndex(
      (p) => p.modele === product.modele
    );

    if (product.isFavorite && index === -1) {
      favoriteProducts.push(product);
    } else if (!product.isFavorite && index !== -1) {
      favoriteProducts.splice(index, 1);
    }

    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));
  }

  newPrice(size: string) {
    switch (size) {
      case "Noir":
        this.myProduct.prix = this.myProduct.prix + 2000;
        break;
      case "Blanc":
        this.myProduct.prix = this.myProduct.prix + 0;
        break;
      case "Rouge":
        this.myProduct.prix = this.myProduct.prix + 1000;
        break;
      case "Gris":
        this.myProduct.prix = this.myProduct.prix + 0;
        break;
    }
  }
}
