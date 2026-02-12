import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {

  searchText: string = '';

  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['/home'], {
      queryParams: { search: this.searchText }
    });
  }
}
