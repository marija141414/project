import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Database } from '../database';
import { CommonModule } from '@angular/common';
import { News } from '../modules/news';
import { Router } from '@angular/router';
import { User } from '../modules/user';

@Component({
  standalone: true,
  imports: [CarouselModule, CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      2000: {
        items: 2
      },
      4000: {
        items: 3
      },
      6000: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.korisnik = JSON.parse(sessionStorage.getItem("trenutniKorisnik"));
    this.news = Database.news;
  }

  news: News[] = [];
  korisnik: User;
  likeFlag: boolean = false;

  animal(){
    this.router.navigate(['/animals'])
  }

  contact(){
    this.router.navigate(['/contact'])
  }

  home(){
    this.router.navigate(['/home'])
  }

  events(){
    this.router.navigate(['/events'])
  }

  odjaviSe(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  lajkuj(title){
    var index = Database.news.findIndex(n => n.title === title);
    if(this.likeFlag == false){
      Database.news[index].numberOfLike++;
      this.likeFlag = true;
    }
    else{
      Database.news[index].numberOfLike--;
      this.likeFlag = false;
    }
  }
}
