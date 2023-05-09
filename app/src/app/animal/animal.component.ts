import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../modules/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  animal!: Animal;
}
