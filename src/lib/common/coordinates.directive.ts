import {
  Directive,
  ElementRef,
  HostListener,
  NgModule,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Directive({ selector: '[ngx-color-coordinates]' })
export class CoordinatesDirective implements OnInit, OnDestroy {
  @Output()
  coordinatesChange = new Subject<{
    x: number;
    y: number;
    top: number;
    left: number;
    containerWidth: number;
    containerHeight: number;
    $event: any;
  }>();
  private mousechange = new Subject<{
    x: number;
    y: number;
    $event: any;
    isTouch: boolean;
  }>();

  private sub: Subscription;

  @HostListener('mousedown', ['$event', '$event.pageX', '$event.pageY'])
  @HostListener('touchstart', [
    '$event',
    '$event.touches[0].clientX',
    '$event.touches[0].clientY',
    'true',
  ])
  mousedown($event: Event, x: number, y: number, isTouch = false) {
    $event.preventDefault();

    let moveListener;
    if (isTouch) {
      moveListener = this.renderer.listen('window', 'touchmove', (event) => {
        event.preventDefault();
        this.mousechange.next({
          $event: event,
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
          isTouch
        });
      });
    } else {
      moveListener = this.renderer.listen('window', 'mousemove', (event) => {
        event.preventDefault();
        this.mousechange.next({
          $event: event,
          x: event.pageX,
          y: event.pageY,
          isTouch
        });
      });
    }

    const upListener = this.renderer.listen('window', isTouch ? 'touchend' : 'mouseup', (event) => {
      moveListener();
      upListener();
    })

    this.mousechange.next({ $event, x, y, isTouch });
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.sub = this.mousechange
      .pipe(
        // limit times it is updated for the same area
        distinctUntilChanged((p, q) => p.x === q.x && p.y === q.y),
      )
      .subscribe(n => this.handleChange(n.x, n.y, n.$event, n.isTouch));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  handleChange(x: number, y: number, $event: Event, isTouch: boolean) {
    const containerWidth = this.el.nativeElement.clientWidth;
    const containerHeight = this.el.nativeElement.clientHeight;
    const left =
      x -
      (this.el.nativeElement.getBoundingClientRect().left + window.pageXOffset);
    let top = y - this.el.nativeElement.getBoundingClientRect().top;

    if (!isTouch) {
      top = top - window.pageYOffset;
    }
    this.coordinatesChange.next({
      x,
      y,
      top,
      left,
      containerWidth,
      containerHeight,
      $event,
    });
  }
}

@NgModule({
  declarations: [CoordinatesDirective],
  exports: [CoordinatesDirective],
})
export class CoordinatesModule {}
