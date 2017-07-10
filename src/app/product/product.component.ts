import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  id: string;
  
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      // params is an observable
      this.id = params['id'];
    });
  }
  
  ngOnInit() {
  }
  
}
