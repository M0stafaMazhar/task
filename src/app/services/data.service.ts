import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Res } from '../interfaces/res';
import { User } from '../interfaces/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url: string = 'https://reqres.in/api/users';

  searchSub = new Subject<string>();

  constructor(private http: HttpClient) {}

  getAllUsers(pageNum: number) {
    return this.http.get<Res>(`${this.url}?page=${pageNum}`);
  }

  getUser(userId: number) {
    return this.http.get<{ data: User }>(`${this.url}/${userId}`);
  }
}
