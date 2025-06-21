import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ← ده المهم

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // ← لازم نضيفه هنا
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {}
