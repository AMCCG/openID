import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserModel } from './model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user:UserModel = new UserModel()

  constructor(
    public angularFireAuthModule: AngularFireAuth) { }

  ngOnInit(): void {
  }

  public firebaseAuthen(): void {
    this.angularFireAuthModule.auth.signInWithEmailAndPassword("tee_api@hotmail.com","tee_api@hotmail.com").then(response =>{
      console.error("firebaseAuthen user", response)
      this.setUserModel(response.user)
    })
  }

  private setUserModel(userFirebase: import("firebase").User):void {
    this.user.id  =userFirebase.uid
    this.user.username = userFirebase.email
  }

}
