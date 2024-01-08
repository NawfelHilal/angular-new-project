import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar"; // Importez le module MatToolbarModule

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar color="primary" class="footer">
      <span>Hilal Nawfel</span>
    </mat-toolbar>
  `,
  styles: ``,
})
export class FooterComponent {}
