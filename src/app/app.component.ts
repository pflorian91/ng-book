import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'app/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SpotifyService
  ]
})

export class AppComponent implements OnInit {
  
  constructor(
    private router: Router,
    private spotifyService: SpotifyService
  ) {}
  
  public ngOnInit(): void {
    this.spotifyService
      .searchTrack('query')
      .subscribe((res: any) => console.log('Got object', res));
  }
  
}
