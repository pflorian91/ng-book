import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-price-display',
  // templateUrl: './price-display.component.html',
  template: `<div class="price-display">\${{ price }}</div>`,
  styleUrls: ['./price-display.component.css']
})

export class PriceDisplayComponent implements OnInit {
  
  @Input() price: number;
  
  constructor() { }

  ngOnInit() {
  }

}
