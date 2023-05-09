export class Animal{
    commonName: string;
    scientificName: string;
    type: string;
    diet: string;
    averageLife: string;
    size: string;
    weight: string;
    image: string;

    constructor(commonName:string, scientificName: string, type: string, diet: string, averageLife: string, size: string, weight: string, image: string) { 
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.type = type;
        this.diet = diet; 
        this.averageLife = averageLife; 
        this.size = size; 
        this.weight = weight; 
        this.image = image; 
     }  
}