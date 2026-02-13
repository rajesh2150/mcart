import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
   styleUrls: ['./navbar.css'] 
})
export class Navbar {
  searchText: string = '';

  constructor(private router: Router) {}

  onSearch() {
    // Navigate to home with query parameter
    this.router.navigate(['/'], {
      queryParams: { search: this.searchText }
    });
  }
}
