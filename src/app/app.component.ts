import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ProductCardComponent } from "./product-card/product-card.component";
import { Product } from "./models/product.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductCardComponent],
  template: `
    <div className="product">
      <app-product-card
        *ngFor="let product of products"
        [myProduct]="product"
      />
    </div>
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
