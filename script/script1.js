const WIDTH = 100;
const HEIGHT = 100;
const ARROWTOP = 38;
const ARROWRIGHT = 39;
const ARROWDOWN = 40;
const ARROWLEFT = 37;

class Block{
	constructor(width, height){
		this.width = width;
		this.height = height;
	}
	
	 getWidth(){
		return this.width;	
	}
	
	 getHeight(){
		return this.height;	
	}
	
	 setWidth(newWidth){
		return this.width = newWidth;	
	}
	
	 setWidth(newHeight){
		return this.width = newHeight;	
	}
}

class Block2d extends Block{
	constructor(x, y, width, height){
		super(width, height);
		this.x = x;
		this.y = y;
	}
	
	 getX (){
		return this.x;	
	}
	
	 getY (){
		return this.y;	
	}
	
	 setX(newX){
		return this.x = newX;	
	}
	
	 setY (newY){
		return this.y = newY;	
	}
	
	 includes(block){
		if ( ( ( this.getX() + this.getWidth() ) >=  ( block.getX() + block.getWidth() ) &&
		   	( this.getX() ) <= ( block.getX() ) ) &&
		   	 ( ( this.getY() + this.getHeight() ) <= ( blcok.getY() + block.getHeight()  &&
		     ( this.getY() ) <= ( block.getY() ) ) ) ) {
				return true;
		} else {
			return false;	
		}
	}
	
}

class PlayerBlock extends Block2d{
	constructor(x, y, width, height){
		super(w, y, width, height);
	}
	
	 move(direction){
		if ( this.canMove( direction.newX, direction.newY) ){
			this.changeLocation( direction.newX, direction.newY );	
			return true;
		} else {
			return false;
		}
	}
			
	 changeLocation(newX, newY){
		draw ( this, newMove );
		this.setX(newX);
		this.setY(newY);
	}
		
	 canMove(testX, testY){
		let newMove = new Block2d(testX, testY, WIDTH, HEIGHT);
		if ( this.includes ( newMove ) ) {
			return false;
		} else {
		return true;
		}
	 }
}

function init(arr, ctx){
	let blockArray = [];
	for ( let i = 0; i < arr.length; i++) {
		let block = new Block2d(arr[i][0],arr[i][1], WIDTH, HEIGHT);
		blockArray.push(block);
		draw(ctx, block);
	}
	return blockArray;
}
	
function draw(ctx, block) { 
	ctx.fillRect(block.getX(), block.getY(), block.getWidth(), block.getHeight());
}

function blockHandler(e){
	if( e.keyCode >= 37 && e.keyCode <= 40){
		console.log(e.keyCode);	
		switch ( e.keyCode )
			case 
	}
}

let points = [[100,0],[300,100],[100,200],[200,200],[300,100],[100,300],[400,300],[100,400],[200,400]];
let exit = [300, 500];
let player = [0,0];
let playerBlock = new PlayerBlock(player[0],player[1], WIDTH, HEIGHT);
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


init(points, ctx);
ctx.strokeRect(0, 0, canvas.width-100, canvas.height-100);
ctx.fillStyle = 'green';
draw(ctx, new Block2d(exit[0],exit[1],WIDTH,HEIGHT));


document.addEventListener('keydown', blockHandler);
