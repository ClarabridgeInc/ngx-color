import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, NgModule, OnDestroy, OnInit, Output, Renderer2, } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
var CoordinatesDirective = /** @class */ (function () {
    function CoordinatesDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.coordinatesChange = new Subject();
        this.mousechange = new Subject();
    }
    CoordinatesDirective.prototype.mousedown = function ($event, x, y, isTouch) {
        var _this = this;
        if (isTouch === void 0) { isTouch = false; }
        $event.preventDefault();
        var moveListener;
        if (isTouch) {
            moveListener = this.renderer.listen('window', 'touchmove', function (event) {
                event.preventDefault();
                _this.mousechange.next({
                    $event: event,
                    x: event.touches[0].clientX,
                    y: event.touches[0].clientY,
                    isTouch: isTouch
                });
            });
        }
        else {
            moveListener = this.renderer.listen('window', 'mousemove', function (event) {
                event.preventDefault();
                _this.mousechange.next({
                    $event: event,
                    x: event.pageX,
                    y: event.pageY,
                    isTouch: isTouch
                });
            });
        }
        var upListener = this.renderer.listen('window', isTouch ? 'touchend' : 'mouseup', function (event) {
            moveListener();
            upListener();
        });
        this.mousechange.next({ $event: $event, x: x, y: y, isTouch: isTouch });
    };
    CoordinatesDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.mousechange
            .pipe(
        // limit times it is updated for the same area
        distinctUntilChanged(function (p, q) { return p.x === q.x && p.y === q.y; }))
            .subscribe(function (n) { return _this.handleChange(n.x, n.y, n.$event, n.isTouch); });
    };
    CoordinatesDirective.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CoordinatesDirective.prototype.handleChange = function (x, y, $event, isTouch) {
        var containerWidth = this.el.nativeElement.clientWidth;
        var containerHeight = this.el.nativeElement.clientHeight;
        var left = x -
            (this.el.nativeElement.getBoundingClientRect().left + window.pageXOffset);
        var top = y - this.el.nativeElement.getBoundingClientRect().top;
        if (!isTouch) {
            top = top - window.pageYOffset;
        }
        this.coordinatesChange.next({
            x: x,
            y: y,
            top: top,
            left: left,
            containerWidth: containerWidth,
            containerHeight: containerHeight,
            $event: $event,
        });
    };
    CoordinatesDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return CoordinatesDirective;
}());
export { CoordinatesDirective };
var CoordinatesModule = /** @class */ (function () {
    function CoordinatesModule() {
    }
    CoordinatesModule = tslib_1.__decorate([
        NgModule({
            declarations: [CoordinatesDirective],
            exports: [CoordinatesDirective],
        })
    ], CoordinatesModule);
    return CoordinatesModule;
}());
export { CoordinatesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNvbG9yLyIsInNvdXJjZXMiOlsiY29vcmRpbmF0ZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osUUFBUSxFQUNSLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RDtJQTZERSw4QkFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBM0QvRCxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFRM0IsQ0FBQztRQUNHLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBSzdCLENBQUM7SUE2QzZELENBQUM7SUFsQ25FLHdDQUFTLEdBQVQsVUFBVSxNQUFhLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxPQUFlO1FBUDlELGlCQXVDQztRQWhDOEMsd0JBQUEsRUFBQSxlQUFlO1FBQzVELE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV4QixJQUFJLFlBQVksQ0FBQztRQUNqQixJQUFJLE9BQU8sRUFBRTtZQUNYLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQUMsS0FBSztnQkFDL0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztvQkFDcEIsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FB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QztJQUNMLENBQUM7O2dCQW5DdUIsVUFBVTtnQkFBb0IsU0FBUzs7SUEzRC9EO1FBREMsTUFBTSxFQUFFOzttRUFTSjtJQWlCTDtRQVBDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3JFLFlBQVksQ0FBQyxZQUFZLEVBQUU7WUFDMUIsUUFBUTtZQUNSLDJCQUEyQjtZQUMzQiwyQkFBMkI7WUFDM0IsTUFBTTtTQUNQLENBQUM7O2lEQUNnQixLQUFLOzt5REFnQ3RCO0lBM0RVLG9CQUFvQjtRQURoQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUUsQ0FBQztpREE4RHpCLFVBQVUsRUFBb0IsU0FBUztPQTdEcEQsb0JBQW9CLENBaUdoQztJQUFELDJCQUFDO0NBQUEsQUFqR0QsSUFpR0M7U0FqR1ksb0JBQW9CO0FBdUdqQztJQUFBO0lBQWdDLENBQUM7SUFBcEIsaUJBQWlCO1FBSjdCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ2hDLENBQUM7T0FDVyxpQkFBaUIsQ0FBRztJQUFELHdCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25neC1jb2xvci1jb29yZGluYXRlc10nIH0pXHJcbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBAT3V0cHV0KClcclxuICBjb29yZGluYXRlc0NoYW5nZSA9IG5ldyBTdWJqZWN0PHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgY29udGFpbmVyV2lkdGg6IG51bWJlcjtcclxuICAgIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xyXG4gICAgJGV2ZW50OiBhbnk7XHJcbiAgfT4oKTtcclxuICBwcml2YXRlIG1vdXNlY2hhbmdlID0gbmV3IFN1YmplY3Q8e1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgJGV2ZW50OiBhbnk7XHJcbiAgICBpc1RvdWNoOiBib29sZWFuO1xyXG4gIH0+KCk7XHJcblxyXG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50JywgJyRldmVudC5wYWdlWCcsICckZXZlbnQucGFnZVknXSlcclxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgW1xyXG4gICAgJyRldmVudCcsXHJcbiAgICAnJGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCcsXHJcbiAgICAnJGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WScsXHJcbiAgICAndHJ1ZScsXHJcbiAgXSlcclxuICBtb3VzZWRvd24oJGV2ZW50OiBFdmVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGlzVG91Y2ggPSBmYWxzZSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IG1vdmVMaXN0ZW5lcjtcclxuICAgIGlmIChpc1RvdWNoKSB7XHJcbiAgICAgIG1vdmVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLm1vdXNlY2hhbmdlLm5leHQoe1xyXG4gICAgICAgICAgJGV2ZW50OiBldmVudCxcclxuICAgICAgICAgIHg6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCxcclxuICAgICAgICAgIHk6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSxcclxuICAgICAgICAgIGlzVG91Y2hcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtb3ZlTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5tb3VzZWNoYW5nZS5uZXh0KHtcclxuICAgICAgICAgICRldmVudDogZXZlbnQsXHJcbiAgICAgICAgICB4OiBldmVudC5wYWdlWCxcclxuICAgICAgICAgIHk6IGV2ZW50LnBhZ2VZLFxyXG4gICAgICAgICAgaXNUb3VjaFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cExpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsIGlzVG91Y2ggPyAndG91Y2hlbmQnIDogJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcclxuICAgICAgbW92ZUxpc3RlbmVyKCk7XHJcbiAgICAgIHVwTGlzdGVuZXIoKTtcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5tb3VzZWNoYW5nZS5uZXh0KHsgJGV2ZW50LCB4LCB5LCBpc1RvdWNoIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5tb3VzZWNoYW5nZVxyXG4gICAgICAucGlwZShcclxuICAgICAgICAvLyBsaW1pdCB0aW1lcyBpdCBpcyB1cGRhdGVkIGZvciB0aGUgc2FtZSBhcmVhXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHAsIHEpID0+IHAueCA9PT0gcS54ICYmIHAueSA9PT0gcS55KSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKG4gPT4gdGhpcy5oYW5kbGVDaGFuZ2Uobi54LCBuLnksIG4uJGV2ZW50LCBuLmlzVG91Y2gpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSh4OiBudW1iZXIsIHk6IG51bWJlciwgJGV2ZW50OiBFdmVudCwgaXNUb3VjaDogYm9vbGVhbikge1xyXG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgY29uc3QgbGVmdCA9XHJcbiAgICAgIHggLVxyXG4gICAgICAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQpO1xyXG4gICAgbGV0IHRvcCA9IHkgLSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuICAgIGlmICghaXNUb3VjaCkge1xyXG4gICAgICB0b3AgPSB0b3AgLSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvb3JkaW5hdGVzQ2hhbmdlLm5leHQoe1xyXG4gICAgICB4LFxyXG4gICAgICB5LFxyXG4gICAgICB0b3AsXHJcbiAgICAgIGxlZnQsXHJcbiAgICAgIGNvbnRhaW5lcldpZHRoLFxyXG4gICAgICBjb250YWluZXJIZWlnaHQsXHJcbiAgICAgICRldmVudCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDb29yZGluYXRlc0RpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW0Nvb3JkaW5hdGVzRGlyZWN0aXZlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGVzTW9kdWxlIHt9XHJcbiJdfQ==