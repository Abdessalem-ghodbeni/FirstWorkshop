import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Modeles/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  myUser: User = {
    id: 9,
    firstName: 'holla',
    lastName: 'Clooney',
    birthDate: '1999-06-30',
    accountCategory: 'Customer',
    email: 'hollsa@brando.com',
    password: 'test',
    picture: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    profession: 'Software Engineer',
  };
  constructor(private _userService: UserService, private R: Router) {}
  add() {
    this._userService.addUser(this.myUser).subscribe(() => {
      alert('added user');
      this.R.navigate(['/user/user']);
    });
  }
}
