import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Rect } from './rect';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as main from '../../actions/mainchar.action';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @ViewChild( 'canvas', {static:true}) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  requestId: any;
  rect: Rect;
  right: boolean;
  left: boolean;

  mainChar$: Observable<any>;

  constructor( public render: Renderer2, private store: Store<{ mainChar: any }> ) {

   }

  ngOnInit() {
     this.mainChar$ = this.store.pipe( select('mainChar') );
     this.ctx = this.canvas.nativeElement.getContext( '2d' );
     this.rect = new Rect( this.ctx, 0, 50, 100, 'red' );
     setInterval( () => {
       this.draw();
     }, 200);
     this.render.listen( 'document', 'keydown', (e: any ) => {
         if( e.key == 'ArrowRight' ){
            this.right = true;
         }else if( e.key == 'ArrowLeft' ){
          this.left = true;
         }
     } );

     this.render.listen( 'document', 'keyup', (e: any ) => {  
          this.right = false;
          this.left = false;
    } );
  }
  
  
  public draw(): any {
     this.ctx.clearRect( 0,0, this.ctx.canvas.width, this.ctx.canvas.height );
     this.ctx.fillStyle = 'black';
     this.ctx.fillRect(0, this.canvas.nativeElement.height - 40, this.canvas.nativeElement.width, 200 );
      if( this.right ){
         this.rect.moveRight();
      }else if( this.left ){
         this.rect.moveLeft();
      }
      this.rect.draw();
      this.requestId = requestAnimationFrame( () => this.draw() );
  }

  public normal(){
     this.store.dispatch( main.normal() );
     this.mainChar$.subscribe( ( resp ) => {
          this.rect.speed = resp.speed;
          this.rect.w = resp.w;
          this.rect.h = resp.h;
          this.rect.color = resp.color;
     });
  }

  public speed(s: number){
    this.store.dispatch( main.speed( {s}) );
    this.mainChar$.subscribe( ( resp ) => {
         this.rect.speed = resp.speed;
         this.rect.w = resp.w;
         this.rect.h = resp.h;
         this.rect.color = resp.color;
    });
  }

  public slow(s: number){
    this.store.dispatch( main.slow( {s}) );
    this.mainChar$.subscribe( ( resp ) => {
         this.rect.speed = resp.speed;
         this.rect.w = resp.w;
         this.rect.h = resp.h;
         this.rect.color = resp.color;
    });
  }


}
