export class Sharpie {
    
    color: string;
    width:  number;
    inkAmount: number = 100;

constructor (color: string, width: number, inkAmount: number = 100){

    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;

}

public use(){
    this.inkAmount-=1;



}

}

