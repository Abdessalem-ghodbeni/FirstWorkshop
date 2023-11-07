import { Component, OnInit } from '@angular/core';
import { User } from '../Modeles/user';
import { UserService } from '../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  implements OnInit{
  id!:number;
  user!:User;

  constructor(private userS:UserService, private ActR:ActivatedRoute, private R:Router) { }

  ngOnInit(): void {
    this.id = this.ActR.snapshot.params['id'];
    this.userS.getUserById(this.id).subscribe(data=>this.user=data);
  }

  updateUser(){
    this.userS.updateUser(this.user).subscribe(()=>{
      alert('User Updated!!');
      this.R.navigate(['users']);
    });
  }
}
