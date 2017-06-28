import {
  Component,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';
import { Product } from '../other/product.model';

@Component({
  selector: 'app-product-image',
  template: `<img class="product-image" [src]="product.imageUrl">`,
  // templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})

export class ProductImageComponent implements OnInit {
  
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
  
  constructor() { }

  ngOnInit() {
  }

}
