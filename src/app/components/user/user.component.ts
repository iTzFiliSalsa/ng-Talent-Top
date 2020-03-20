import { Component, OnInit, DoCheck } from '@angular/core';
import { User } from '../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Register } from '../../models/resgister';
import { global } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  public register: Register;
  public status: string;
  public req:boolean;
  public title: string;
  public user: User;
  public register_title: string;
  public url;
  constructor(
    public _userService:UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.status = '';
    this.req = true;
    this.title = "Inicia sesión";
    this.register_title = "Registrate";
    this.register = new Register(1,'','','',1,'','');
    this.user = new User('','');
    this.url = global.url;
  }

  ngOnInit(): void {
    this.logout(); 
    this.redirection();
  }

  ngDoCheck(){
    this.status = this._userService.getStatus();
  }

  redirection(){
    if(this._userService.getStatus() == 'success'){
      this._router.navigate(['home']);
    }
  }

  login(form){
    this.req = false;
    this._userService.login(this.user).subscribe(
      response => {
        if(response.status == 'error'){
          this.status = 'error';
          this.req = true;
        }else{
          this.status = 'success';
          localStorage.setItem("status", "success");
          this._router.navigate(['home']);
          this.req = false;
        }
      },
      error => {
        this.req = true;
        console.log(<any>error);
      }
    );
  }

  signup(form){
    this._userService.register(this.register).subscribe(
      response =>{
        //console.log(response);
      },
      error => {
      }
    );
  }

  logout(){
    this ._route.params.subscribe( params => {
      let logout = + params['sure'];

      if(logout == 1){
        localStorage.removeItem("status");
        this._router.navigate(['login']);  
      }
      
    }
    );
  }

}
