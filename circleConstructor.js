class Circle
{
    constructor(radius){
        this.radius=radius;
        this.PI=3.14;
    }
    getArea=()=>{
        return this.PI*this.radius*this.radius;
    }
    getPerimeter=()=>{
        return 2 * this.PI * this.radius
    }
}

const cir = new Circle(10);
console.log(cir.getArea());
console.log(cir.getPerimeter());