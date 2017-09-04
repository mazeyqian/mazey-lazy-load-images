import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {

    this.products = [
      new Product(1, "First Product", 1.99, 3.5, "This is auction's first product.", ["Elec", "Hard"]),
      new Product(2, "Second Product", 2.99, 2.5, "This is auction's second product.", ["Book"]),
      new Product(3, "Third Product", 3.99, 4.5, "This is auction's third product.", ["Hard"]),
      new Product(4, "Fourth Product", 4.99, 1.5, "This is auction's fourth product.", ["Elec", "Hard"]),
      new Product(5, "Fifth Product", 5.99, 3.5, "This is auction's fifth product.", ["Elec"]),
      new Product(6, "Sixth Product", 6.99, 2.5, "This is auction's sixth product.", ["Book"])
    ];

    this.products.push(
      new Product(7, "Seventh Product", 7.99, 3.5, "This is auction's seventh product.", ["Book"]),
      new Product(8, "Eighth Product", 8.99, 4.5, "This is auction's eighth product.", ["Book"]),
      new Product(9, "Ninth Product", 7.99, 3.5, "This is auction's ninth product.", ["Book"])
    );

  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
