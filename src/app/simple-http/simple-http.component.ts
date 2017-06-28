import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  
  data: Object;
  loading: boolean;
  
  constructor(
    private http: Http
  ) { }
  
  ngOnInit() {
  }
  
  public makeRequest(): void {
    this.loading = true;
    
    this
      .http
      .request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((value: Response): void => {
        this.data = value.json();
        this.loading = false;
      });
  }
  
}
