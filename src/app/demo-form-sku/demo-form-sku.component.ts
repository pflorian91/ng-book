import {
  Component,
  OnInit
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {
  
  myForm: FormGroup;
  sku: AbstractControl;
  
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': [
        '', Validators.compose([
          Validators.required, this.skuValidator
        ])
      ]
    });
    
    this.sku = this.myForm.controls['sku'];
    
    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );
    
    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );
  }
  
  ngOnInit() {
  }
  
  onSubmit(value: any): void {
    console.log('you submitted value:', value);
  }
  
  private skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return { invalidSku: true };
    }
  }
}
