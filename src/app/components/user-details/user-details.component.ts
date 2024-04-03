import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  userData: User;
  userId: number;
  loading: boolean = true;
  error: boolean = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.dataService.getUser(this.userId).subscribe(
      (res) => {
        this.userData = res.data;
        this.loading = false;
      },
      (err) => {
        this.error = true;
        this.loading = false;
      }
    );
  }

  navigateBack(): void {
    this.router.navigate(['../']);
  }
}
