import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotifyService {
  
  static BASE_URL = 'https://api.spotify.com/v1';
  
  constructor(private http: Http) {
  }
  
  // Client ID 7e986f5733e646d88e17b354bfb8328d
  // Client Secret 6b77cc5448b74f2f9438ba13a995f6a8
  
  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    
    return this.http.request(queryURL).map((res: any) => res.json());
  }
  
  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }
  
  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }
  
  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }
}
