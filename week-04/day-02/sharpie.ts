class Sharpie {
    color: string;
    width:  number;
    inkAmount: number = 100;

constructor (color: string, width: number){

    this.color = color;
    this.width = width;
}

public use(){
    this.inkAmount-=1;
}
}

let lila = new Sharpie("lila", 52.58888 );
let blue = new Sharpie("blue",89)
lila.use();

console.log(lila);
console.log(blue)