import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../models/product.model";
import { CommonModule, NgFor, NgIf } from "@angular/common";
import { NgModel } from "@angular/forms";
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
  ],
  styleUrls: ["./product-card.component.css"],
  template: `
    <!-- <p>{{ myProduct.marque | uppercase }}</p>
    <p>{{ myProduct.modele | uppercase }}</p>
    <img src="{{ myProduct.imageUrl }}" width="400px" />
    <div className="price-like">
      <b>{{ myProduct.prix | currency : "EUR" }}</b>
      <p>
        <b>{{ myProduct.likes }}</b>
        <button (click)="onLike()">{{ myProduct.btnValue }}</button>
      </p>
      {{ myProduct.date | date : "short" }}
      <div *ngIf="myProduct.size">
        <label for="size-select">Choisissez une taille:</label>
        <select
          id="size-select"
          [(ngModel)]="selectedSize"
          (ngModelChange)="newPrice(selectedSize)"
        >
          <option *ngFor="let size of myProduct.size" [value]="size">
            {{ size }}
          </option>
        </select>
      </div>
    </div> -->
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{ myProduct.marque | uppercase }}</mat-card-title>
        <mat-card-subtitle>{{
          myProduct.modele | uppercase
        }}</mat-card-subtitle>
      </mat-card-header>
      <img
        mat-card-image
        src="{{ myProduct.imageUrl }}"
        alt="Photo of a Shiba Inu"
      />
      <mat-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz
          breeds of dog from Japan. A small, agile dog that copes very well with
          mountainous terrain, the Shiba Inu was originally bred for hunting.
        </p>
      </mat-card-content>
      <mat-card-actions>
        <div class="info-card">
          <b>{{ myProduct.likes }}</b>
          <button mat-button (click)="onLike()">
            {{ myProduct.btnValue }}
          </button>
          <div *ngIf="myProduct.size">
            <label for="size-select">Choisissez une taille:</label>
            <select
              id="size-select"
              [(ngModel)]="selectedSize"
              (ngModelChange)="newPrice(selectedSize)"
            >
              <option *ngFor="let size of myProduct.size" [value]="size">
                {{ size }}
              </option>
            </select>
          </div>
        </div>
        <br />
        <button (click)="toggleFavorite(myProduct)">
          {{
            myProduct.isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"
          }}
        </button>
        <div class="date">
          {{ myProduct.date | date : "YYYY/MM/dd" }}
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
      case "XS":
        this.myProduct.prix = 25;
        break;
      case "S":
        this.myProduct.prix = 30;
        break;
      case "M":
        this.myProduct.prix = 35;
        break;
      case "L":
        this.myProduct.prix = 55;
        break;
    }
  }
}
