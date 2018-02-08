import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../guards/auth.service';
import {User} from '../../fake/user';
import {DataService} from '../../fake/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;
  isLogged: boolean;

  constructor(private router: Router, private authService: AuthService, private dataService: DataService) {
  }
  ngOnInit() {
    this.isLogged = this.authService.isLoggedIn;
    this.user = this.authService.currentUser;
    this.dataService.current.subscribe(user => this.userLogin(user));
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        this.isLogged = this.authService.isLoggedIn;
        this.dataService.emitData(null);
        this.router.navigate(['/login']);
      });
  }

  userLogin(user): void {
    if (!user) {
      return;
    }
    this.user = user;
    this.isLogged = this.authService.isLoggedIn;
  }
}
