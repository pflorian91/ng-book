import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ElementRef
} from '@angular/core';
import { SearchResult } from '../search-result.model';
import { YouTubeSearchService } from '../youtube-search.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-box',
  // templateUrl: './search-box.component.html',
  template: `<input type="text" class="form-control" placeholder="Search" autofocus>`,
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {
  
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  
  constructor(
    private youtube: YouTubeSearchService,
    private el: ElementRef
  ) {
  }
  
  ngOnInit(): void {
    Observable
      .fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.emit(true))
    /*.map((query: string) => this.youtube.search(query))
     .switch()*/;
    
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 1) // filter out if empty
      .debounceTime(250) // only once every 250ms
      .do(() => this.loading.emit(true)) // enable loading
      // search, discarding old events if new input comes in
      .map((query: string) => this.youtube.search(query))
      .switch()
      // act on the return of the search
      .subscribe(
        (results: SearchResult[]) => { // on sucesss
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.emit(false);
        },
        () => { // on completion
          this.loading.emit(false);
        });

  }
  
}
