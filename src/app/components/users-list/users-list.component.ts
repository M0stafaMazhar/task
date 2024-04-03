import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit, OnDestroy {
  usersList: User[];
  displayedList: User[];
  loading = true;
  searchSub: Subscription;
  page: number = 1;
  totalItems: number;
  itemsPerPage: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPage(1);

    this.searchSub = this.dataService.searchSub.subscribe((query) => {
      if (!query) {
        this.displayedList = this.usersList;
      } else {
        this.displayedList = this.usersList.filter((user) => user.id == query);
      }
    });
  }

  getPage(page: number) {
    this.page = page;
    this.dataService.getAllUsers(page).subscribe(
      (res) => {
        this.usersList = res.data;
        this.displayedList = this.usersList;
        this.loading = false;
        this.itemsPerPage = res.per_page;
        this.totalItems = res.total;
      },
      (err) => {}
    );
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
}
