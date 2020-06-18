import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
var SaturationComponent = /** @class */ (function () {
    function SaturationComponent() {
        this.onChange = new EventEmitter();
    }
    SaturationComponent.prototype.ngOnChanges = function () {
        this.background = "hsl(" + this.hsl.h + ", 100%, 50%)";
        this.pointerTop = -(this.hsv.v * 100) + 1 + 100 + '%';
        this.pointerLeft = this.hsv.s * 100 + '%';
    };
    SaturationComponent.prototype.handleChange = function (_a) {
        var top = _a.top, left = _a.left, containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, $event = _a.$event;
        if (left < 0) {
            left = 0;
        }
        else if (left > containerWidth) {
            left = containerWidth;
        }
        else if (top < 0) {
            top = 0;
        }
        else if (top > containerHeight) {
            top = containerHeight;
        }
        var saturation = left / containerWidth;
        var bright = -(top / containerHeight) + 1;
        bright = bright > 0 ? bright : 0;
        bright = bright > 1 ? 1 : bright;
        var data = {
            h: this.hsl.h,
            s: saturation,
            v: bright,
            a: this.hsl.a,
            source: 'hsva',
        };
        this.onChange.emit({ data: data, $event: $event });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SaturationComponent.prototype, "hsl", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SaturationComponent.prototype, "hsv", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], SaturationComponent.prototype, "radius", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SaturationComponent.prototype, "pointer", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SaturationComponent.prototype, "circle", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SaturationComponent.prototype, "onChange", void 0);
    SaturationComponent = tslib_1.__decorate([
        Component({
            selector: 'color-saturation',
            template: "\n  <div class=\"color-saturation\" ngx-color-coordinates (coordinatesChange)=\"handleChange($event)\" [style.background]=\"background\">\n    <div class=\"saturation-white\">\n      <div class=\"saturation-black\"></div>\n      <div class=\"saturation-pointer\" [ngStyle]=\"pointer\" [style.top]=\"pointerTop\" [style.left]=\"pointerLeft\">\n        <div class=\"saturation-circle\" [ngStyle]=\"circle\"></div>\n      </div>\n    </div>\n  </div>\n  ",
            preserveWhitespaces: false,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["\n    .saturation-white {\n      background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .saturation-black {\n      background: linear-gradient(to top, #000, rgba(0,0,0,0));\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .color-saturation {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .saturation-pointer {\n      position: absolute;\n      cursor: default;\n    }\n    .saturation-circle {\n      width: 4px;\n      height: 4px;\n      box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);\n      border-radius: 50%;\n      cursor: hand;\n      transform: translate(-2px, -4px);\n    }\n  "]
        })
    ], SaturationComponent);
    return SaturationComponent;
}());
export { SaturationComponent };
var SaturationModule = /** @class */ (function () {
    function SaturationModule() {
    }
    SaturationModule = tslib_1.__decorate([
        NgModule({
            declarations: [SaturationComponent],
            exports: [SaturationComponent],
            imports: [CommonModule, CoordinatesModule],
        })
    ], SaturationModule);
    return SaturationModule;
}());
export { SaturationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F0dXJhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29sb3IvIiwic291cmNlcyI6WyJzYXR1cmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUVSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQXlENUQ7SUF0REE7UUE0RFksYUFBUSxHQUFHLElBQUksWUFBWSxFQUF1QyxDQUFDO0lBbUMvRSxDQUFDO0lBOUJDLHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFjLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQzVDLENBQUM7SUFDRCwwQ0FBWSxHQUFaLFVBQWEsRUFBc0Q7WUFBcEQsWUFBRyxFQUFFLGNBQUksRUFBRSxvQ0FBZSxFQUFFLGtDQUFjLEVBQUUsa0JBQU07UUFDL0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNWO2FBQU0sSUFBSSxJQUFJLEdBQUcsY0FBYyxFQUFFO1lBQ2hDLElBQUksR0FBRyxjQUFjLENBQUM7U0FDdkI7YUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDbEIsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNUO2FBQU0sSUFBSSxHQUFHLEdBQUcsZUFBZSxFQUFFO1lBQ2hDLEdBQUcsR0FBRyxlQUFlLENBQUM7U0FDdkI7UUFFRCxJQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFakMsSUFBTSxJQUFJLEdBQWU7WUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUMsRUFBRSxVQUFVO1lBQ2IsQ0FBQyxFQUFFLE1BQU07WUFDVCxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQXZDUTtRQUFSLEtBQUssRUFBRTs7b0RBQVc7SUFDVjtRQUFSLEtBQUssRUFBRTs7b0RBQVc7SUFDVjtRQUFSLEtBQUssRUFBRTs7dURBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7O3dEQUFvQztJQUNuQztRQUFSLEtBQUssRUFBRTs7dURBQW1DO0lBQ2pDO1FBQVQsTUFBTSxFQUFFOzt5REFBb0U7SUFObEUsbUJBQW1CO1FBdEQvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxxY0FTVDtZQXdDRCxtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3FCQXZDN0MsZzJCQW9DRDtTQUlGLENBQUM7T0FDVyxtQkFBbUIsQ0F5Qy9CO0lBQUQsMEJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXpDWSxtQkFBbUI7QUFnRGhDO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixnQkFBZ0I7UUFMNUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO1NBQzNDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBRztJQUFELHVCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXNNb2R1bGUgfSBmcm9tICcuL2Nvb3JkaW5hdGVzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhTTEEsIEhTVkEsIEhTVkFzb3VyY2UgfSBmcm9tICcuL2hlbHBlcnMvY29sb3IuaW50ZXJmYWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXNhdHVyYXRpb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImNvbG9yLXNhdHVyYXRpb25cIiBuZ3gtY29sb3ItY29vcmRpbmF0ZXMgKGNvb3JkaW5hdGVzQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNhdHVyYXRpb24td2hpdGVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNhdHVyYXRpb24tYmxhY2tcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNhdHVyYXRpb24tcG9pbnRlclwiIFtuZ1N0eWxlXT1cInBvaW50ZXJcIiBbc3R5bGUudG9wXT1cInBvaW50ZXJUb3BcIiBbc3R5bGUubGVmdF09XCJwb2ludGVyTGVmdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzYXR1cmF0aW9uLWNpcmNsZVwiIFtuZ1N0eWxlXT1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAuc2F0dXJhdGlvbi13aGl0ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLnNhdHVyYXRpb24tYmxhY2sge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDAwLCByZ2JhKDAsMCwwLDApKTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuY29sb3Itc2F0dXJhdGlvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLnNhdHVyYXRpb24tcG9pbnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gICAgLnNhdHVyYXRpb24tY2lyY2xlIHtcclxuICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDEuNXB4ICNmZmYsIGluc2V0IDAgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjMpLCAwIDAgMXB4IDJweCByZ2JhKDAsMCwwLC40KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBjdXJzb3I6IGhhbmQ7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC00cHgpO1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNhdHVyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGhzbDogSFNMQTtcclxuICBASW5wdXQoKSBoc3Y6IEhTVkE7XHJcbiAgQElucHV0KCkgcmFkaXVzOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcG9pbnRlcjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBjaXJjbGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGE6IEhTVkFzb3VyY2U7ICRldmVudDogRXZlbnQgfT4oKTtcclxuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgcG9pbnRlclRvcDogc3RyaW5nO1xyXG4gIHBvaW50ZXJMZWZ0OiBzdHJpbmc7XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gYGhzbCgke3RoaXMuaHNsLmh9LCAxMDAlLCA1MCUpYDtcclxuICAgIHRoaXMucG9pbnRlclRvcCA9IC0odGhpcy5oc3YudiAqIDEwMCkgKyAxICsgMTAwICsgJyUnO1xyXG4gICAgdGhpcy5wb2ludGVyTGVmdCA9IHRoaXMuaHN2LnMgKiAxMDAgKyAnJSc7XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZSh7IHRvcCwgbGVmdCwgY29udGFpbmVySGVpZ2h0LCBjb250YWluZXJXaWR0aCwgJGV2ZW50IH0pIHtcclxuICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICBsZWZ0ID0gMDtcclxuICAgIH0gZWxzZSBpZiAobGVmdCA+IGNvbnRhaW5lcldpZHRoKSB7XHJcbiAgICAgIGxlZnQgPSBjb250YWluZXJXaWR0aDtcclxuICAgIH0gZWxzZSBpZiAodG9wIDwgMCkge1xyXG4gICAgICB0b3AgPSAwO1xyXG4gICAgfSBlbHNlIGlmICh0b3AgPiBjb250YWluZXJIZWlnaHQpIHtcclxuICAgICAgdG9wID0gY29udGFpbmVySGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNhdHVyYXRpb24gPSBsZWZ0IC8gY29udGFpbmVyV2lkdGg7XHJcbiAgICBsZXQgYnJpZ2h0ID0gLSh0b3AgLyBjb250YWluZXJIZWlnaHQpICsgMTtcclxuICAgIGJyaWdodCA9IGJyaWdodCA+IDAgPyBicmlnaHQgOiAwO1xyXG4gICAgYnJpZ2h0ID0gYnJpZ2h0ID4gMSA/IDEgOiBicmlnaHQ7XHJcblxyXG4gICAgY29uc3QgZGF0YTogSFNWQXNvdXJjZSA9IHtcclxuICAgICAgaDogdGhpcy5oc2wuaCxcclxuICAgICAgczogc2F0dXJhdGlvbixcclxuICAgICAgdjogYnJpZ2h0LFxyXG4gICAgICBhOiB0aGlzLmhzbC5hLFxyXG4gICAgICBzb3VyY2U6ICdoc3ZhJyxcclxuICAgIH07XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhLCAkZXZlbnQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1NhdHVyYXRpb25Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTYXR1cmF0aW9uQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb29yZGluYXRlc01vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYXR1cmF0aW9uTW9kdWxlIHt9XHJcbiJdfQ==