import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Modeles/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  currentUser: any;
  id = 0;
  constructor(
    private _userService: UserService,
    private actR: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = Number(this.actR.snapshot.paramMap.get('id'));
    console.log(this.id);

    console.log(this.currentUser);
  }
}
