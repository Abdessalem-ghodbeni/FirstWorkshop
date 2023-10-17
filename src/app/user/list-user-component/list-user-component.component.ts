import { Component } from '@angular/core';
import { User } from '../../Modeles/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css'],
})
export class ListUserComponentComponent {
  constructor(private R: Router, private userS: UserService) {}

  ListUser: User[] = [];

  ngOnInit() {
    this.userS.getAllUser().subscribe((data) => (this.ListUser = data));
  }
  GoToAddUser() {
    this.R.navigate(['user/addUser']);
  }
  goToEdit() {
    this.R.navigate(['edit_user', 1]);
  }
}
