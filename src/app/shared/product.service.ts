import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, "First Product", 1.99, 3.5, "This is auction's first product.", ["Elec", "Hard"]),
    new Product(2, "Second Product", 2.99, 2.5, "This is auction's second product.", ["Book"]),
    new Product(3, "Third Product", 3.99, 4.5, "This is auction's third product.", ["Hard"]),
    new Product(4, "Fourth Product", 4.99, 1.5, "This is auction's fourth product.", ["Elec", "Hard"]),
    new Product(5, "Fifth Product", 5.99, 3.5, "This is auction's fifth product.", ["Elec"]),
    new Product(6, "Sixth Product", 6.99, 2.5, "This is auction's sixth product.", ["Book"])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, "2017-09-04 21:23:22", "Mazey", 3, "Nice Product"),
    new Comment(2, 1, "2017-09-05 21:23:22", "Cherrie", 4, "Nice Product"),
    new Comment(3, 1, "2017-09-06 21:23:22", "Luna", 2, "Nice Product"),
    new Comment(4, 2, "2017-09-07 21:23:22", "Jery", 3, "Nice Product")
  ];

  /*this.products.push(
    new Product(7, "Seventh Product", 7.99, 3.5, "This is auction's seventh product.", ["Book"]),
    new Product(8, "Eighth Product", 8.99, 4.5, "This is auction's eighth product.", ["Book"]),
    new Product(9, "Ninth Product", 7.99, 3.5, "This is auction's ninth product.", ["Book"])
  );*/

  constructor() {
  }

  getAllCategories(): string[] {
    return ["Elec", "Hard", "Book"];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
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

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ){

  }
}
