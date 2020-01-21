import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService) { }

  ngOnInit() {

    this.auth.userProfile$.subscribe(profile => {
      this.profile = profile;

    })
  }

}
