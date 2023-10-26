import { Injectable } from '@angular/core';
import { User } from '../Modeles/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllUser() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  addUser(u: User) {
    return this.http.post<User>(
      ' http://localhost:3000/users',
      u,
      this.httpOptions
    );
  }
  // addUser(u: User) {
  //   this.ListUser.push(u);
  // }
  delete(id: number) {}
  UpdateUser(id: number, u: User) {}
}
