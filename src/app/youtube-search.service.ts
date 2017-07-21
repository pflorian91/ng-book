import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  Http,
  Response
} from '@angular/http';
// import 'rxjs/add/operator/map';
import { SearchResult } from './searchResult.model';

@Injectable()
export class YoutubeSearchService {
  
  apiKey: string;
  apiUrl: string;
  
  constructor(private http: Http) {
    this.apiUrl = 'https://www.googleapis.com/youtube/v3/search';
    this.apiKey = 'api-key-here';
  }
  
  public search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    
    const queryUrl = `${this.apiUrl}?${params}`;
    
    return this
      .http
      .get(queryUrl)
      .map((response: Response) => {
        return (<any>response.json()).items.map(item => {
          // console.log("raw item", item); // uncomment if you want to debug
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });
    
  }
}
