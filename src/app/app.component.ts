import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="demoApp";
  provider:any;
  user:any;

  constructor(private router :Router){

  }
  ngOnInit(): void {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
    firebase.auth().onAuthStateChanged(user=> {
      this.user = user;
    });

  }

  logout(){
    firebase.auth().signOut().then(function() {
     console.log("sign out");
     
    }).catch(function(error) {
      // An error happened.
    });
  }
 
 
  loginWithGmail() {
    firebase.auth().signInWithPopup(this.provider).then(function(result) {
     var user = result.user;
     console.log(user.email);
     
    }).catch(function(error) {
     
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  facebookLogin(){
   var provider = new firebase.auth.FacebookAuthProvider();
   this.provider = provider;

   firebase.auth().signInWithPopup(provider).then(function(result) {
 
    var user = result.user;
    console.log(user);
    
    
  }).catch(function(error) {
    
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    
  });
  this.router.navigate(['/members'])
  }
 
  
}
