import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../models/product.model";
import { NgFor, NgIf } from "@angular/common";
import { NgModel } from "@angular/forms";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  template: `
    <p>{{ myProduct.marque }}</p>
    <p>{{ myProduct.modele }}</p>
    <img src="{{ myProduct.imageUrl }}" width="400px" />
    <div className="price-like">
      <b>{{ myProduct.prix }}</b>
      <p>
        <b>{{ myProduct.likes }}</b>
        <button (click)="onLike()">{{ myProduct.btnValue }}</button>
      </p>

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
  `,
  styles: ``,
})
export class ProductCardComponent {
  @Input() myProduct!: Product;
  selectedSize: string = "";

  onLike() {
    if (this.myProduct.likes === 0) {
      this.myProduct.btnValue = "Unlike";

      this.myProduct.likes++;
    } else {
      this.myProduct.btnValue = "Like";
      this.myProduct.likes--;
    }
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
