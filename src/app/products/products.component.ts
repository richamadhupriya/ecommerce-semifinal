import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any;

  constructor(private router: Router) { }

  ngOnInit() {
    let data=localStorage.getItem('cartItem');
    if(data !== null){
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
        id: 1,
        title: "IPhone X",
        description: "",
        img: "assets/iPhoneX.jpg",
        price: 85000
      },
      {
        id:2,
        title: "Mi A1",
        description: "",
        img:"assets/miAi.jpg",
        price:13999
      },
      {
        id:3,
        title: "One Plus 6",
        description: "",
        img:"assets/oneplus6.jpg",
        price:29999
      },
      {
        id:4,
        title: "Nexus 6P",
        description: "",
        img:"assets/nexus6p.jpg",
        price:59499
      },
      {
        id:5,
        title: "Samsung S9 Plus",
        description: "",
        img:"assets/s9Plus.jpg",
        price:55999
      },
      {
        id:6,
        title: "IPhone 8 Plus",
        description: "",
        img:"assets/iPhone8plus.jpg",
        price:75999
      },
      {
        id:7,
        title: "Samsung Galaxy S8",
        description: "",
        img:"assets/samsungGs8.jpeg",
        price:49999
      },
      {
        id:8,
        title: "Mi Note 5 Pro",
        description: "",
        img:"assets/mi_note_5.jpg",
        price:13999
      },
      {
        id:9,
        title: "Nokia 6",
        description: "",
        img:"assets/nokia6.jpeg",
        price:14999
      }
    ]
  }

  addToCart(index){
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if(data !== null){
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
