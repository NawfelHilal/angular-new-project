import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar"; // Importez le module MatToolbarModule

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar color="primary">
      <span>Auto Sale</span>
    </mat-toolbar>
  `,
  styles: ``,
})
export class HeaderComponent {}
