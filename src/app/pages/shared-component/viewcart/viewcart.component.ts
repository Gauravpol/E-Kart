import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent {
  @Input() isInCart: boolean = true;
  quantity :number = 1;

  increaseQuantity(){
    this.quantity > 1;
  this.quantity++;

  }
  decreaseQuantity(){
    this.quantity < 1 && this.quantity >=0;
    this.quantity--;


  }
}
