import { News } from "./modules/news"
import { Animal } from "./modules/animal"
import { Comment } from "./modules/comment"
import { User } from "./modules/user" 

export class Database{

    static news = [
        new News(
            'Hanging out with kangaroos',
            'Bring your little ones to our zoo for the weekend and your children will have the opportunity to meet kangaroos in a completely different way with our experienced breeders. Viewers had their say about the kangaroos antics, with one suggesting the animal was sparring to get ready for challenges from rival roos.',
            'event1.jpg',
            0
        ),
        new News(
            'Reconstruction of appearance',
            'At the beginning of the year, the reconstruction of certain parts of our zoo is planned... Bring your little ones to our zoo for the weekend and your children will have the opportunity to meet kangaroos in a completely different way with our experienced breeders.',
            'event2.jpg',
            0
        ),
        new News(
            'New housing for lions opened',
            'Our furry friends the lions got a new home where they will start living... Bring your little ones to our zoo for the weekend and your children will have the opportunity to meet kangaroos in a completely different way with our experienced breeders.',
            'event3.jpg',
            0
        ),
        new News(
            'Manifestation on the water',
            'A large number of visitors gathered on the occasion of the announced exhibition of our aquatic friends... Bring your little ones to our zoo for the weekend and your children will have the opportunity to meet kangaroos in a completely different way with our experienced breeders.',
            'event4.jpg',
            0
        ),
        new News(
            'Guess who arrived?!',
            'A new great friend arrived today and joined our community... Bring your little ones to our zoo for the weekend and your children will have the opportunity to meet kangaroos in a completely different way with our experienced breeders.',
            'event5.jpg',
            0
        )
    ]

    static animals = [
        new Animal(
            "Koala",
            "Phascolarctos cinereus",
            "Mammals",
            "Herbivore",
            "20 years",
            "23.5 to 33.5 inches",
            "20 pounds",
            "coala.jpg"
        ),
        new Animal(
            "Parrot",
            "Phascolarctos cinereus",
            "Mammals",
            "Herbivore",
            "20 years",
            "23.5 to 33.5 inches",
            "20 pounds",
            "papagaj.jpg"
        ),
        new Animal(
            "Cangoroo",
            "Phascolarctos cinereus",
            "Mammals",
            "Herbivore",
            "20 years",
            "23.5 to 33.5 inches",
            "20 pounds",
            "kengur.jpg"
        ),
        new Animal(
            "Monkey",
            "Phascolarctos cinereus",
            "Mammals",
            "Herbivore",
            "20 years",
            "23.5 to 33.5 inches",
            "20 pounds",
            "majmunce.jpg"
        ),
        new Animal(
            "Python",
            "Phascolarctos cinereus",
            "Mammals",
            "Herbivore",
            "20 years",
            "23.5 to 33.5 inches",
            "20 pounds",
            "piton.jpg"
        ),
        new Animal(
            "Tiger",
            "Phascolarctos cinereus",
            "Mammals",
            "Herbivore",
            "20 years",
            "23.5 to 33.5 inches",
            "20 pounds",
            "tigar.jpg"
        ),
        new Animal(
            "Elephant",
            "Phascolarctos cinereus",
            "Mammals",
            "Herbivore",
            "20 years",
            "23.5 to 33.5 inches",
            "20 pounds",
            "elephant.jpg"
        )
    ]

    static comments = [
        new Comment(
            "I saw these animals live and they are beautiful!",
            "Ana99",
            "Koala"
        ),
        new Comment(
            "What impressed me is that they are not afraid of the visitors in the zoo and approach the children to play...",
            "Petar12",
            "Koala"
        ),
        new Comment(
            "I love it! Greetings from Argentina!!!",
            "Milos33",
            "Parrot"
        )
    ]

    static users = [
        new User(
            "Petar",
            "Petrovic",
            "064567325",
            "Brace Kovac 45",
            "Petar12",
            "petar123"
        ),
        new User(
            "Ana",
            "Mitrovic",
            "064567326",
            "Krusevacka 45",
            "Ana99",
            "ana123"
        ),
        new User(
            "Milos",
            "Milosevic",
            "064567325",
            "Bulevar Milutina Milankovica 136",
            "Milos33",
            "milos123"
        )
    ]

}