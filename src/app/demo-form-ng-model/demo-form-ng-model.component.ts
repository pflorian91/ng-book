import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AnalyticsImplementation } from '../analytics-demo.interface';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-demo-form-ng-model',
  templateUrl: './demo-form-ng-model.component.html',
  styleUrls: ['./demo-form-ng-model.component.css']
})

export class DemoFormNgModelComponent implements OnInit {
  
  myForm: FormGroup;
  productName: string;
  
  constructor(fb: FormBuilder, private analyticsService: AnalyticsService) {
    this.myForm = fb.group({
      'productName': ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
    this.analyticsService.record({
      eventName: 'test event name',
      scope: 'test scope'
    });
  }
  
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
