//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	getWidth(){
		return this.width;
	}
	getHeight(){
		return this.height;
	}
	getArea(){
		this.area = this.width*this.height;
		return this.area;
	}
}

class Square extends Rectangle {
	constructor(side,width,height){
		super(width,height);
		this.side = side;
	}
	getPerimeter(){
		this.perimeter = 4*this.side;
		return this.perimeter;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
