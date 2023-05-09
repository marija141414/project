import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../modules/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(sessionStorage.getItem("trenutniKorisnik"));
  }

  korisnik: User;

  odjaviSe(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
