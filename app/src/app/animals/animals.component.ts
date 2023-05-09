import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Database } from '../database';
import { Animal } from '../modules/animal';
import { User } from '../modules/user';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(sessionStorage.getItem("trenutniKorisnik"));
    this.animals = Database.animals;
  }

  animals: Animal[] = [];
  p:any;
  korisnik: User;

  udjiUzivotinju(animal: Animal){
    sessionStorage.setItem("animal", animal.commonName);
    this.router.navigate(['/animalDetails']);
  }

  odjaviSe(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
