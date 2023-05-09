export class Comment{
    text: string;
    owner: string;
    animal: string

    constructor(text:string, owner: string, animal: string) { 
        this.text = text;
        this.owner = owner;
        this.animal = animal;
    }  
}