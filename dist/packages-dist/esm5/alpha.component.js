import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CheckboardModule } from './checkboard.component';
import { CoordinatesModule } from './coordinates.directive';
var AlphaComponent = /** @class */ (function () {
    function AlphaComponent() {
        this.direction = 'horizontal';
        this.onChange = new EventEmitter();
    }
    AlphaComponent.prototype.ngOnChanges = function () {
        if (this.direction === 'vertical') {
            this.pointerLeft = 0;
            this.pointerTop = this.rgb.a * 100;
            this.gradient = {
                background: "linear-gradient(to bottom, rgba(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ", 0) 0%,\n          rgba(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ", 1) 100%)",
            };
        }
        else {
            this.gradient = {
                background: "linear-gradient(to right, rgba(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ", 0) 0%,\n          rgba(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ", 1) 100%)",
            };
            this.pointerLeft = this.rgb.a * 100;
        }
    };
    AlphaComponent.prototype.handleChange = function (_a) {
        var top = _a.top, left = _a.left, containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, $event = _a.$event;
        var data;
        if (this.direction === 'vertical') {
            var a = void 0;
            if (top < 0) {
                a = 0;
            }
            else if (top > containerHeight) {
                a = 1;
            }
            else {
                a = Math.round(top * 100 / containerHeight) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: a,
                    source: 'rgb',
                };
            }
        }
        else {
            var a = void 0;
            if (left < 0) {
                a = 0;
            }
            else if (left > containerWidth) {
                a = 1;
            }
            else {
                a = Math.round(left * 100 / containerWidth) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data: data, $event: $event });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AlphaComponent.prototype, "hsl", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AlphaComponent.prototype, "rgb", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AlphaComponent.prototype, "pointer", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AlphaComponent.prototype, "shadow", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AlphaComponent.prototype, "radius", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AlphaComponent.prototype, "direction", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AlphaComponent.prototype, "onChange", void 0);
    AlphaComponent = tslib_1.__decorate([
        Component({
            selector: 'color-alpha',
            template: "\n  <div class=\"alpha\" [style.border-radius]=\"radius\">\n    <div class=\"alpha-checkboard\">\n      <color-checkboard></color-checkboard>\n    </div>\n    <div class=\"alpha-gradient\" [ngStyle]=\"gradient\" [style.box-shadow]=\"shadow\" [style.border-radius]=\"radius\"></div>\n    <div ngx-color-coordinates (coordinatesChange)=\"handleChange($event)\" class=\"alpha-container color-alpha-{{direction}}\">\n      <div class=\"alpha-pointer\" [style.left.%]=\"pointerLeft\" [style.top.%]=\"pointerTop\">\n        <div class=\"alpha-slider\" [ngStyle]=\"pointer\"></div>\n      </div>\n    </div>\n  </div>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            styles: ["\n    .alpha {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .alpha-checkboard {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      overflow: hidden;\n    }\n    .alpha-gradient {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .alpha-container {\n      position: relative;\n      height: 100%;\n      margin: 0 3px;\n    }\n    .alpha-pointer {\n      position: absolute;\n    }\n    .alpha-slider {\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      margin-top: 1px;\n      transform: translateX(-2px);\n    },\n  "]
        })
    ], AlphaComponent);
    return AlphaComponent;
}());
export { AlphaComponent };
var AlphaModule = /** @class */ (function () {
    function AlphaModule() {
    }
    AlphaModule = tslib_1.__decorate([
        NgModule({
            declarations: [AlphaComponent],
            exports: [AlphaComponent],
            imports: [CommonModule, CheckboardModule, CoordinatesModule],
        })
    ], AlphaModule);
    return AlphaModule;
}());
export { AlphaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNvbG9yLyIsInNvdXJjZXMiOlsiYWxwaGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBRVIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBaUU1RDtJQTdEQTtRQW1FVyxjQUFTLEdBQThCLFlBQVksQ0FBQztRQUNuRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQXlFL0MsQ0FBQztJQXBFQyxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLFVBQVUsRUFBRSxxQ0FBbUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUNSLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQ0FDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBWTthQUM1RCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2QsVUFBVSxFQUFFLG9DQUFr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LEVBQUUsd21CQVlUO1lBNENELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLG1CQUFtQixFQUFFLEtBQUs7cUJBM0N4Qix3d0JBd0NEO1NBSUYsQ0FBQztPQUNXLGNBQWMsQ0FnRjFCO0lBQUQscUJBQUM7Q0FBQSxBQWhGRCxJQWdGQztTQWhGWSxjQUFjO0FBdUYzQjtJQUFBO0lBQTBCLENBQUM7SUFBZCxXQUFXO1FBTHZCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDO1NBQzdELENBQUM7T0FDVyxXQUFXLENBQUc7SUFBRCxrQkFBQztDQUFBLEFBQTNCLElBQTJCO1NBQWQsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2hlY2tib2FyZE1vZHVsZSB9IGZyb20gJy4vY2hlY2tib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlc01vZHVsZSB9IGZyb20gJy4vY29vcmRpbmF0ZXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSFNMQSwgUkdCQSB9IGZyb20gJy4vaGVscGVycy9jb2xvci5pbnRlcmZhY2VzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLWFscGhhJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJhbHBoYVwiIFtzdHlsZS5ib3JkZXItcmFkaXVzXT1cInJhZGl1c1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFscGhhLWNoZWNrYm9hcmRcIj5cclxuICAgICAgPGNvbG9yLWNoZWNrYm9hcmQ+PC9jb2xvci1jaGVja2JvYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWxwaGEtZ3JhZGllbnRcIiBbbmdTdHlsZV09XCJncmFkaWVudFwiIFtzdHlsZS5ib3gtc2hhZG93XT1cInNoYWRvd1wiIFtzdHlsZS5ib3JkZXItcmFkaXVzXT1cInJhZGl1c1wiPjwvZGl2PlxyXG4gICAgPGRpdiBuZ3gtY29sb3ItY29vcmRpbmF0ZXMgKGNvb3JkaW5hdGVzQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCIgY2xhc3M9XCJhbHBoYS1jb250YWluZXIgY29sb3ItYWxwaGEte3tkaXJlY3Rpb259fVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWxwaGEtcG9pbnRlclwiIFtzdHlsZS5sZWZ0LiVdPVwicG9pbnRlckxlZnRcIiBbc3R5bGUudG9wLiVdPVwicG9pbnRlclRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbHBoYS1zbGlkZXJcIiBbbmdTdHlsZV09XCJwb2ludGVyXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIC5hbHBoYSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLmFscGhhLWNoZWNrYm9hcmQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5hbHBoYS1ncmFkaWVudCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLmFscGhhLWNvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgfVxyXG4gICAgLmFscGhhLXBvaW50ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICAuYWxwaGEtc2xpZGVyIHtcclxuICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIC42KTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XHJcbiAgICB9LFxyXG4gIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFscGhhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBoc2w6IEhTTEE7XHJcbiAgQElucHV0KCkgcmdiOiBSR0JBO1xyXG4gIEBJbnB1dCgpIHBvaW50ZXI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgc2hhZG93OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmFkaXVzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIGdyYWRpZW50OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIHBvaW50ZXJMZWZ0OiBudW1iZXI7XHJcbiAgcG9pbnRlclRvcDogbnVtYmVyO1xyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICB0aGlzLnBvaW50ZXJMZWZ0ID0gMDtcclxuICAgICAgdGhpcy5wb2ludGVyVG9wID0gdGhpcy5yZ2IuYSAqIDEwMDtcclxuICAgICAgdGhpcy5ncmFkaWVudCA9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgke3RoaXMucmdiLnJ9LCR7XHJcbiAgICAgICAgICB0aGlzLnJnYi5nXHJcbiAgICAgICAgfSwke3RoaXMucmdiLmJ9LCAwKSAwJSxcclxuICAgICAgICAgIHJnYmEoJHt0aGlzLnJnYi5yfSwke3RoaXMucmdiLmd9LCR7dGhpcy5yZ2IuYn0sIDEpIDEwMCUpYCxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ3JhZGllbnQgPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgke3RoaXMucmdiLnJ9LCR7XHJcbiAgICAgICAgICB0aGlzLnJnYi5nXHJcbiAgICAgICAgfSwke3RoaXMucmdiLmJ9LCAwKSAwJSxcclxuICAgICAgICAgIHJnYmEoJHt0aGlzLnJnYi5yfSwke3RoaXMucmdiLmd9LCR7dGhpcy5yZ2IuYn0sIDEpIDEwMCUpYCxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5wb2ludGVyTGVmdCA9IHRoaXMucmdiLmEgKiAxMDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZSh7IHRvcCwgbGVmdCwgY29udGFpbmVySGVpZ2h0LCBjb250YWluZXJXaWR0aCwgJGV2ZW50IH0pIHtcclxuICAgIGxldCBkYXRhO1xyXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgIGxldCBhOiBudW1iZXI7XHJcbiAgICAgIGlmICh0b3AgPCAwKSB7XHJcbiAgICAgICAgYSA9IDA7XHJcbiAgICAgIH0gZWxzZSBpZiAodG9wID4gY29udGFpbmVySGVpZ2h0KSB7XHJcbiAgICAgICAgYSA9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYSA9IE1hdGgucm91bmQodG9wICogMTAwIC8gY29udGFpbmVySGVpZ2h0KSAvIDEwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaHNsLmEgIT09IGEpIHtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgaDogdGhpcy5oc2wuaCxcclxuICAgICAgICAgIHM6IHRoaXMuaHNsLnMsXHJcbiAgICAgICAgICBsOiB0aGlzLmhzbC5sLFxyXG4gICAgICAgICAgYSxcclxuICAgICAgICAgIHNvdXJjZTogJ3JnYicsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGE6IG51bWJlcjtcclxuICAgICAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgYSA9IDA7XHJcbiAgICAgIH0gZWxzZSBpZiAobGVmdCA+IGNvbnRhaW5lcldpZHRoKSB7XHJcbiAgICAgICAgYSA9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYSA9IE1hdGgucm91bmQobGVmdCAqIDEwMCAvIGNvbnRhaW5lcldpZHRoKSAvIDEwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaHNsLmEgIT09IGEpIHtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgaDogdGhpcy5oc2wuaCxcclxuICAgICAgICAgIHM6IHRoaXMuaHNsLnMsXHJcbiAgICAgICAgICBsOiB0aGlzLmhzbC5sLFxyXG4gICAgICAgICAgYSxcclxuICAgICAgICAgIHNvdXJjZTogJ3JnYicsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhLCAkZXZlbnQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0FscGhhQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQWxwaGFDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENoZWNrYm9hcmRNb2R1bGUsIENvb3JkaW5hdGVzTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFscGhhTW9kdWxlIHt9XHJcbiJdfQ==