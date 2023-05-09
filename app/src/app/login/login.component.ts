import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Database } from '../database';
import { User } from '../modules/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  korisnickoIme: string;
  lozinka: string;
  porukaGreska: string[] = [];

  prijaviSe(){
    this.porukaGreska = [];
    if(this.korisnickoIme == undefined || this.lozinka == undefined){
      this.porukaGreska.push("Niste uneli sva polja.")
    } else {
      var korisnik = Database.users.find(u => u.username === this.korisnickoIme && u.password === this.lozinka);
      if(korisnik==null){
        this.porukaGreska.push("Nema korisnika sa ovim podacima!")
      }else{
        sessionStorage.setItem("trenutniKorisnik", JSON.stringify(korisnik));
        this.router.navigate(['/home'])
      }     
    }
    
  }
  
}

