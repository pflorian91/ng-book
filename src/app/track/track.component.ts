import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  public track;
  private id;
  
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService
    .getTrack(this.id)
    .subscribe((res: any) => this.renderTrack(res));
  }
  
  private renderTrack(result): void {
    this.track = result;
  }

}
