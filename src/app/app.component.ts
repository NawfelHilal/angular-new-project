import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ProductCardComponent } from "./product-card/product-card.component";
import { Product } from "./models/product.model";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductCardComponent, MatCardModule],
  template: `
    <div className="product">
      <app-product-card
        *ngFor="let product of products"
        [myProduct]="product"
      />
    </div>
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
      <img
        mat-card-image
        src="https://material.angular.io/assets/img/examples/shiba2.jpg"
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
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = "angular-new-project";
  products!: Product[];

  ngOnInit(): void {
    this.products = [
      new Product(
        "Bmw",
        "M3",
        80000,
        "https://cdn.automobile-propre.com/uploads/2023/09/BMW-M3.jpg",
        0,
        "Like",
        ["XS", "S", "M", "L"]
      ),
      new Product(
        "Mercedes",
        "CLA45s",
        80000,
        "https://cdn.automobile-propre.com/uploads/2023/09/BMW-M3.jpg",
        0,
        "Like",
        ["XS", "S", "M", "L"]
      ),
      new Product(
        "AUDI",
        "RS6",
        80000,
        "https://cdn.automobile-propre.com/uploads/2023/09/BMW-M3.jpg",
        0,
        "Like",
        ["XS", "S", "M", "L"]
      ),
    ];
  }
}
