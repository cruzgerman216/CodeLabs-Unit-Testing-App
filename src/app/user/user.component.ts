import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: { name: string };
  data:string = ""
  constructor(private userService: UserService, private dataStorageService:DataStorageService) {}

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataStorageService.getDetails().then((data)=>{
      this.data = data
    })
  }
}
