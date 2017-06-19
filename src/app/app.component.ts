import {
  Component,
  OnInit
} from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  public products: Product[];
  public product: Product;
  
  public ngOnInit(): void {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      )
    ];
    
    this.product = new Product(
      'NICEHAT', // sku
      'A Nice Black Hat', // name
      '/assets/images/products/black-hat.jpg', // imageUrl
      ['Men', 'Accessories', 'Hats'], // department
      29.99
    );
  }
  
  public productWasSelected(product: Product): void {
      console.log('Product clicked', product);
  }
  
}
