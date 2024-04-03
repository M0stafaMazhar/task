import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  searchQuery: string;
  constructor(private dataService: DataService) {}

  onSearch(event) {
    this.searchQuery = event.target.value;
    this.dataService.searchSub.next(this.searchQuery);
  }
}
