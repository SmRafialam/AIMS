import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() count!: number;
  @Input() label!: string;
  @Input() icon!: string;
  @Input() footerLabel!: string;
}
