import { Injectable } from '@angular/core';
import { User } from '../Modeles/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // getUserById(id: number) {
  //   let index = this.ListUser.findIndex((user) => user.idCustomer == id);
  //   return this.ListUser[index];
  // }
  getAllUser() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  // addUser(u: User) {
  //   this.ListUser.push(u);
  // }
  delete(id: number) {}
  UpdateUser(id: number, u: User) {}
}
