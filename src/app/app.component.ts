import { Component, LOCALE_ID, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ProductCardComponent } from "./product-card/product-card.component";
import { Product } from "./models/product.model";
import { MatCardModule } from "@angular/material/card";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
registerLocaleData(localeFr);
import { AppPipesModule } from "./pipes/app-pipes.module";
import { FormsModule } from "@angular/forms";
import { ProductsService } from "./services/products.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-root",
  standalone: true,
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "fr-FR",
    },
  ],
  styleUrls: ["./app.component.css"],
  template: `
    <app-header />
    <header>
      <div class="searchdiv">
        <input
          class="search"
          type="text"
          [(ngModel)]="searchTerm"
          placeholder="Rechercher un produit"
        />
      </div>
      <div class="divBtn">
        <button mat-button color="primary" (click)="toggleSorting()">
          Trier par Date {{ sortTri }}
        </button>
        <button mat-button color="primary" (click)="nameSorting()">
          Trier par Nom {{ sortTri }}
        </button>
      </div>
      <div class="product-container">
        <app-product-card
          class="listCard"
          *ngFor="
            let product of products
              | sortByDate : sortTri
              | search : searchTerm
              | sortByName : nameSort
          "
          [myProduct]="product"
        />
      </div>

      <router-outlet></router-outlet>
    </header>
    <app-footer />
  `,
  styles: [],
  imports: [
    CommonModule,
    RouterOutlet,
    ProductCardComponent,
    MatCardModule,
    AppPipesModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    HeaderComponent,
    FooterComponent,
    MatButtonModule,
  ],
})
export class AppComponent implements OnInit {
  title = "angular-new-project";
  nameSort: string = "asc";
  searchTerm: string = "";
  products!: Product[];
  sortTri: string = "asc";
  search: string = "";

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    const favoriteProducts = JSON.parse(
      localStorage.getItem("favoriteProducts") || "[]"
    );

    this.products = this.productService.products.map((product) => {
      product.isFavorite = favoriteProducts.some(
        (p: { modele: string }) => p.modele === product.modele
      );
      return product;
    });

    console.log(this.products);
  }

  toggleSorting() {
    this.sortTri = this.sortTri === "asc" ? "desc" : "asc";
  }

  nameSorting() {
    this.nameSort = this.nameSort === "asc" ? "desc" : "asc";
  }
}
