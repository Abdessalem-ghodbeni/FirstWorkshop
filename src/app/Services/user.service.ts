import { Injectable } from '@angular/core';
import { User } from '../Modeles/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllUser() {
    return this.http.get<User[]>(this.url);
  }
  addUser(u: User) {
    return this.http.post<User>(this.url, u, this.httpOptions);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getUserById(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  updateUser(u: User) {
    return this.http.put<User>(this.url + '/' + u.id, u, this.httpOptions);
  }
}
