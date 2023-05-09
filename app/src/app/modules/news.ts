export class News{
    title: string;
    description: string;
    image: string;
    numberOfLike: number;

    constructor(title:string, description: string, image: string, numberOfLike: number) { 
        this.title = title;
        this.description = description;
        this.image = image;
        this.numberOfLike = 0; 
     }  
}