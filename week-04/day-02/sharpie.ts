class Sharpie {
    color: string;
    width:  number;
    inkAmount: number = 100;

constructor (color: string, width: number){

    this.color = color;
    this.width = width;
}

public use(){
    this.inkAmount-=10;
}
}

let lila = new Sharpie("lila", 52.58888 );

lila.use();

console.log(lila);
