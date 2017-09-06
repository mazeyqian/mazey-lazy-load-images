import * as express from 'express';

const app = express();

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
const products: Product[] = [
  new Product(1, "First Product", 1.99, 3.5, "This is auction's first product.", ["Elec", "Hard"]),
  new Product(2, "Second Product", 2.99, 2.5, "This is auction's second product.", ["Book"]),
  new Product(3, "Third Product", 3.99, 4.5, "This is auction's third product.", ["Hard"]),
  new Product(4, "Fourth Product", 4.99, 1.5, "This is auction's fourth product.", ["Elec", "Hard"]),
  new Product(5, "Fifth Product", 5.99, 3.5, "This is auction's fifth product.", ["Elec"]),
  new Product(6, "Sixth Product", 6.99, 2.5, "This is auction's sixth product.", ["Book"])
];

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/products', (req, res) => {
  /*res.send('Receive The Search Request of Product!!');*/
  res.json(products);
});

app.get('/product/:id', (req, res) => {
  res.json(products.find((product) => product.id == req.params.id));
});

const server = app.listen(8022, 'localhost', () => {
  console.log('Server is running!');
});
