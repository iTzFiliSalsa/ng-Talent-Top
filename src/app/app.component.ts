import { Component,OnInit, DoCheck } from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  public title:string;
  public status:string;
  constructor(
    public _userService:UserService
  ){
    this.status = 'error';
    this.title = "Raiz";
  }
  ngOnInit(){

  }
  ngDoCheck(){
    this.status = this._userService.getStatus();
  }
}
