import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, NgModule, OnDestroy, OnInit, Output, Renderer2, } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
let CoordinatesDirective = class CoordinatesDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.coordinatesChange = new Subject();
        this.mousechange = new Subject();
    }
    mousedown($event, x, y, isTouch = false) {
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
        }
        else {
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
        });
        this.mousechange.next({ $event, x, y, isTouch });
    }
    ngOnInit() {
        this.sub = this.mousechange
            .pipe(
        // limit times it is updated for the same area
        distinctUntilChanged((p, q) => p.x === q.x && p.y === q.y))
            .subscribe(n => this.handleChange(n.x, n.y, n.$event, n.isTouch));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    handleChange(x, y, $event, isTouch) {
        const containerWidth = this.el.nativeElement.clientWidth;
        const containerHeight = this.el.nativeElement.clientHeight;
        const left = x -
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
};
CoordinatesDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], CoordinatesDirective.prototype, "coordinatesChange", void 0);
tslib_1.__decorate([
    HostListener('mousedown', ['$event', '$event.pageX', '$event.pageY']),
    HostListener('touchstart', [
        '$event',
        '$event.touches[0].clientX',
        '$event.touches[0].clientY',
        'true',
    ]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Event, Number, Number, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CoordinatesDirective.prototype, "mousedown", null);
CoordinatesDirective = tslib_1.__decorate([
    Directive({ selector: '[ngx-color-coordinates]' }),
    tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
], CoordinatesDirective);
export { CoordinatesDirective };
let CoordinatesModule = class CoordinatesModule {
};
CoordinatesModule = tslib_1.__decorate([
    NgModule({
        declarations: [CoordinatesDirective],
        exports: [CoordinatesDirective],
    })
], CoordinatesModule);
export { CoordinatesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNvbG9yLyIsInNvdXJjZXMiOlsiY29vcmRpbmF0ZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osUUFBUSxFQUNSLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQTZEL0IsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBM0QvRCxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFRM0IsQ0FBQztRQUNHLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBSzdCLENBQUM7SUE2QzZELENBQUM7SUFsQ25FLFNBQVMsQ0FBQyxNQUFhLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxPQUFPLEdBQUcsS0FBSztRQUM1RCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFeEIsSUFBSSxZQUFZLENBQUM7UUFDakIsSUFBSSxPQUFPLEVBQUU7WUFDWCxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNuRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO29CQUNwQixNQUFNLEVBQUUsS0FBSztvQkFDYixDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMs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WUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckUsWUFBWSxDQUFDLFlBQVksRUFBRTtRQUMxQixRQUFRO1FBQ1IsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQixNQUFNO0tBQ1AsQ0FBQzs7NkNBQ2dCLEtBQUs7O3FEQWdDdEI7QUEzRFUsb0JBQW9CO0lBRGhDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRSxDQUFDOzZDQThEekIsVUFBVSxFQUFvQixTQUFTO0dBN0RwRCxvQkFBb0IsQ0FpR2hDO1NBakdZLG9CQUFvQjtBQXVHakMsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7Q0FBRyxDQUFBO0FBQXBCLGlCQUFpQjtJQUo3QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNoQyxDQUFDO0dBQ1csaUJBQWlCLENBQUc7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25neC1jb2xvci1jb29yZGluYXRlc10nIH0pXHJcbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBAT3V0cHV0KClcclxuICBjb29yZGluYXRlc0NoYW5nZSA9IG5ldyBTdWJqZWN0PHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgY29udGFpbmVyV2lkdGg6IG51bWJlcjtcclxuICAgIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xyXG4gICAgJGV2ZW50OiBhbnk7XHJcbiAgfT4oKTtcclxuICBwcml2YXRlIG1vdXNlY2hhbmdlID0gbmV3IFN1YmplY3Q8e1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgJGV2ZW50OiBhbnk7XHJcbiAgICBpc1RvdWNoOiBib29sZWFuO1xyXG4gIH0+KCk7XHJcblxyXG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50JywgJyRldmVudC5wYWdlWCcsICckZXZlbnQucGFnZVknXSlcclxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgW1xyXG4gICAgJyRldmVudCcsXHJcbiAgICAnJGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCcsXHJcbiAgICAnJGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WScsXHJcbiAgICAndHJ1ZScsXHJcbiAgXSlcclxuICBtb3VzZWRvd24oJGV2ZW50OiBFdmVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGlzVG91Y2ggPSBmYWxzZSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IG1vdmVMaXN0ZW5lcjtcclxuICAgIGlmIChpc1RvdWNoKSB7XHJcbiAgICAgIG1vdmVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLm1vdXNlY2hhbmdlLm5leHQoe1xyXG4gICAgICAgICAgJGV2ZW50OiBldmVudCxcclxuICAgICAgICAgIHg6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCxcclxuICAgICAgICAgIHk6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSxcclxuICAgICAgICAgIGlzVG91Y2hcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtb3ZlTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5tb3VzZWNoYW5nZS5uZXh0KHtcclxuICAgICAgICAgICRldmVudDogZXZlbnQsXHJcbiAgICAgICAgICB4OiBldmVudC5wYWdlWCxcclxuICAgICAgICAgIHk6IGV2ZW50LnBhZ2VZLFxyXG4gICAgICAgICAgaXNUb3VjaFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cExpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsIGlzVG91Y2ggPyAndG91Y2hlbmQnIDogJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcclxuICAgICAgbW92ZUxpc3RlbmVyKCk7XHJcbiAgICAgIHVwTGlzdGVuZXIoKTtcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5tb3VzZWNoYW5nZS5uZXh0KHsgJGV2ZW50LCB4LCB5LCBpc1RvdWNoIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5tb3VzZWNoYW5nZVxyXG4gICAgICAucGlwZShcclxuICAgICAgICAvLyBsaW1pdCB0aW1lcyBpdCBpcyB1cGRhdGVkIGZvciB0aGUgc2FtZSBhcmVhXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHAsIHEpID0+IHAueCA9PT0gcS54ICYmIHAueSA9PT0gcS55KSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKG4gPT4gdGhpcy5oYW5kbGVDaGFuZ2Uobi54LCBuLnksIG4uJGV2ZW50LCBuLmlzVG91Y2gpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSh4OiBudW1iZXIsIHk6IG51bWJlciwgJGV2ZW50OiBFdmVudCwgaXNUb3VjaDogYm9vbGVhbikge1xyXG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgY29uc3QgbGVmdCA9XHJcbiAgICAgIHggLVxyXG4gICAgICAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQpO1xyXG4gICAgbGV0IHRvcCA9IHkgLSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuICAgIGlmICghaXNUb3VjaCkge1xyXG4gICAgICB0b3AgPSB0b3AgLSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvb3JkaW5hdGVzQ2hhbmdlLm5leHQoe1xyXG4gICAgICB4LFxyXG4gICAgICB5LFxyXG4gICAgICB0b3AsXHJcbiAgICAgIGxlZnQsXHJcbiAgICAgIGNvbnRhaW5lcldpZHRoLFxyXG4gICAgICBjb250YWluZXJIZWlnaHQsXHJcbiAgICAgICRldmVudCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDb29yZGluYXRlc0RpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW0Nvb3JkaW5hdGVzRGlyZWN0aXZlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGVzTW9kdWxlIHt9XHJcbiJdfQ==