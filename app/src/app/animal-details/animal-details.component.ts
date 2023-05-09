import { Component, OnInit } from '@angular/core';
import { Animal } from '../modules/animal';
import { Comment } from '../modules/comment';
import { User } from '../modules/user';
import { Database } from '../database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(sessionStorage.getItem("trenutniKorisnik"));
    this.commonName = sessionStorage.getItem("animal");
    this.animal = Database.animals.find(an => an.commonName === this.commonName);
    this.comments = Database.comments;
    this.comments.forEach(element => {
      if(element.animal == this.commonName){
        this.commentss.push(element)
      }
      
    });
  }

  animal: Animal;
  commonName: string;
  numberOfComments: number = 0;
  comments: Comment[] = [];
  commentss: Comment[] = [];
  korisnik: User;
  textOfComment: string = "";

  komentarisi(commonName){
    if(this.textOfComment === "") return;
    Database.comments.push(new Comment(this.textOfComment, this.korisnik.username, commonName));
    this.textOfComment = "";
  }

  odjaviSe(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
