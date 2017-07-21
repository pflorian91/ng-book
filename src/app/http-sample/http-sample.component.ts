import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-http-sample',
  templateUrl: './http-sample.component.html',
  styleUrls: ['./http-sample.component.css']
})
export class HttpSampleComponent implements OnInit {
  
  data: any;
  loading: boolean;
  
  private BaseURL: string;
  private forms;
  
  constructor(private http: Http) { }
  
  ngOnInit() {
  
  }
  
  makeRequest(): void {
    this.loading = true;
    
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }
  
  public getEntryForms(): Promise<any[]> {
    return this
      .http
      .get(this.BaseURL + 'getentryforms')
      .toPromise()
      .then(response => {
        this.data = response.json();
        return this.data;
      })
      .catch(this.handleError);
  }
  
  public updateResults(data) {
    console.log(data);
  }
  
  private handleError(reason: any) {
    console.log('We have an error here', reason.message);
  }
  
}


