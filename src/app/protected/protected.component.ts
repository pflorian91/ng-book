import { Component, OnInit } from '@angular/core';
import { LoggedInGuard } from '../logged-in.guard';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css'],
})

export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
