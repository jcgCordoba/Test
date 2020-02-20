export class Rect{

     color = 'red';
     x = 0;
     y = 0;
     w = 10;
     h = 20;
     speed = 1;

    constructor( private ctx: CanvasRenderingContext2D, x: number, w: number, h: number, color: string ){
        this.x = x;
        this.w = w;
        this.h = h;
        this.color = color;
        this.y = ( this.ctx.canvas.height - h ) - 40; 
    }

    public moveRight(){
        if( this.x < ( this.ctx.canvas.width - this.w ) ){
            this.x += this.speed;
        }
    }

    public moveLeft(){
        if( this.x > 0 ){
            this.x -= this.speed;
        }
    }

    public draw(){
       this.y = ( this.ctx.canvas.height - this.h ) -40;
       this.ctx.fillStyle = this.color;
       this.ctx.fillRect( this.x, this.y , this.w, this.h );
    }

}