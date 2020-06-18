import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
import { TinyColor } from '@ctrl/tinycolor';
var ShadeComponent = /** @class */ (function () {
    function ShadeComponent() {
        this.onChange = new EventEmitter();
    }
    ShadeComponent.prototype.ngOnChanges = function () {
        this.gradient = {
            background: "linear-gradient(to right,\n          hsl(" + this.hsl.h + ", 90%, 55%),\n          #000)",
        };
        var hsv = new TinyColor(this.hsl).toHsv();
        this.pointerLeft = 100 - (hsv.v * 100);
    };
    ShadeComponent.prototype.handleChange = function (_a) {
        var left = _a.left, containerWidth = _a.containerWidth, $event = _a.$event;
        var data;
        var v;
        if (left < 0) {
            v = 0;
        }
        else if (left > containerWidth) {
            v = 1;
        }
        else {
            v = Math.round((left * 100) / containerWidth) / 100;
        }
        var hsv = new TinyColor(this.hsl).toHsv();
        if (hsv.v !== v) {
            data = {
                h: this.hsl.h,
                s: 100,
                v: 1 - v,
                l: this.hsl.l,
                a: this.hsl.a,
                source: 'rgb',
            };
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data: data, $event: $event });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ShadeComponent.prototype, "hsl", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ShadeComponent.prototype, "rgb", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ShadeComponent.prototype, "pointer", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ShadeComponent.prototype, "shadow", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ShadeComponent.prototype, "radius", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ShadeComponent.prototype, "onChange", void 0);
    ShadeComponent = tslib_1.__decorate([
        Component({
            selector: 'color-shade',
            template: "\n    <div class=\"shade\" [style.border-radius]=\"radius\">\n      <div\n        class=\"shade-gradient\"\n        [ngStyle]=\"gradient\"\n        [style.box-shadow]=\"shadow\"\n        [style.border-radius]=\"radius\"\n      ></div>\n      <div\n        ngx-color-coordinates\n        (coordinatesChange)=\"handleChange($event)\"\n        class=\"shade-container\"\n      >\n        <div\n          class=\"shade-pointer\"\n          [style.left.%]=\"pointerLeft\"\n          [style.top.%]=\"pointerTop\"\n        >\n          <div class=\"shade-slider\" [ngStyle]=\"pointer\"></div>\n        </div>\n      </div>\n    </div>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            styles: ["\n    .shade {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .shade-gradient {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .shade-container {\n      position: relative;\n      height: 100%;\n      margin: 0 3px;\n    }\n    .shade-pointer {\n      position: absolute;\n    }\n    .shade-slider {\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      margin-top: 1px;\n      transform: translateX(-2px);\n    },\n  "]
        })
    ], ShadeComponent);
    return ShadeComponent;
}());
export { ShadeComponent };
var ShadeModule = /** @class */ (function () {
    function ShadeModule() {
    }
    ShadeModule = tslib_1.__decorate([
        NgModule({
            declarations: [ShadeComponent],
            exports: [ShadeComponent],
            imports: [CommonModule, CoordinatesModule],
        })
    ], ShadeModule);
    return ShadeModule;
}());
export { ShadeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNvbG9yLyIsInNvdXJjZXMiOlsic2hhZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBRVIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWtFNUM7SUEvREE7UUFxRVksYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUE0Qy9DLENBQUM7SUF2Q0Msb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxVQUFVLEVBQUUsOENBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGtDQUNWO1NBQ1gsQ0FBQztRQUNGLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxFQUFnQztZQUE5QixjQUFJLEVBQUUsa0NBQWMsRUFBRSxrQkFBTTtRQUN6QyxJQUFJLElBQUksQ0FBQztRQUNULElBQUksQ0FBUyxDQUFDO1FBQ2QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNQO2FBQU0sSUFBSSxJQUFJLEdBQUcsY0FBYyxFQUFFO1lBQ2hDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDUDthQUFNO1lBQ0wsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3JEO1FBRUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZixJQUFJLEdBQUc7Z0JBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ1IsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLE1BQU0sRUFBRSxLQUFLO2FBQ2QsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBaERRO1FBQVIsS0FBSyxFQUFFOzsrQ0FBVztJQUNWO1FBQVIsS0FBSyxFQUFFOzsrQ0FBVztJQUNWO1FBQVIsS0FBSyxFQUFFOzttREFBb0M7SUFDbkM7UUFBUixLQUFLLEVBQUU7O2tEQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOztrREFBZ0I7SUFDZDtRQUFULE1BQU0sRUFBRTs7b0RBQW9DO0lBTmxDLGNBQWM7UUEvRDFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSx5bkJBc0JUO1lBb0NELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLG1CQUFtQixFQUFFLEtBQUs7cUJBbkN4QixrbkJBZ0NEO1NBSUYsQ0FBQztPQUNXLGNBQWMsQ0FrRDFCO0lBQUQscUJBQUM7Q0FBQSxBQWxERCxJQWtEQztTQWxEWSxjQUFjO0FBeUQzQjtJQUFBO0lBQTBCLENBQUM7SUFBZCxXQUFXO1FBTHZCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO1NBQzNDLENBQUM7T0FDVyxXQUFXLENBQUc7SUFBRCxrQkFBQztDQUFBLEFBQTNCLElBQTJCO1NBQWQsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlc01vZHVsZSB9IGZyb20gJy4vY29vcmRpbmF0ZXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSFNMQSwgUkdCQSB9IGZyb20gJy4vaGVscGVycy9jb2xvci5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgVGlueUNvbG9yIH0gZnJvbSAnQGN0cmwvdGlueWNvbG9yJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXNoYWRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInNoYWRlXCIgW3N0eWxlLmJvcmRlci1yYWRpdXNdPVwicmFkaXVzXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInNoYWRlLWdyYWRpZW50XCJcclxuICAgICAgICBbbmdTdHlsZV09XCJncmFkaWVudFwiXHJcbiAgICAgICAgW3N0eWxlLmJveC1zaGFkb3ddPVwic2hhZG93XCJcclxuICAgICAgICBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJyYWRpdXNcIlxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBuZ3gtY29sb3ItY29vcmRpbmF0ZXNcclxuICAgICAgICAoY29vcmRpbmF0ZXNDaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIGNsYXNzPVwic2hhZGUtY29udGFpbmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwic2hhZGUtcG9pbnRlclwiXHJcbiAgICAgICAgICBbc3R5bGUubGVmdC4lXT1cInBvaW50ZXJMZWZ0XCJcclxuICAgICAgICAgIFtzdHlsZS50b3AuJV09XCJwb2ludGVyVG9wXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZGUtc2xpZGVyXCIgW25nU3R5bGVdPVwicG9pbnRlclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAuc2hhZGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgIC5zaGFkZS1ncmFkaWVudCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLnNoYWRlLWNvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgfVxyXG4gICAgLnNoYWRlLXBvaW50ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICAuc2hhZGUtc2xpZGVyIHtcclxuICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIC42KTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XHJcbiAgICB9LFxyXG4gIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYWRlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBoc2w6IEhTTEE7XHJcbiAgQElucHV0KCkgcmdiOiBSR0JBO1xyXG4gIEBJbnB1dCgpIHBvaW50ZXI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgc2hhZG93OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmFkaXVzOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgZ3JhZGllbnQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgcG9pbnRlckxlZnQ6IG51bWJlcjtcclxuICBwb2ludGVyVG9wOiBudW1iZXI7XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5ncmFkaWVudCA9IHtcclxuICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCxcclxuICAgICAgICAgIGhzbCgke3RoaXMuaHNsLmh9LCA5MCUsIDU1JSksXHJcbiAgICAgICAgICAjMDAwKWAsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaHN2ID0gbmV3IFRpbnlDb2xvcih0aGlzLmhzbCkudG9Ic3YoKTtcclxuICAgIHRoaXMucG9pbnRlckxlZnQgPSAxMDAgLSAoaHN2LnYgKiAxMDApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKHsgbGVmdCwgY29udGFpbmVyV2lkdGgsICRldmVudCB9KSB7XHJcbiAgICBsZXQgZGF0YTtcclxuICAgIGxldCB2OiBudW1iZXI7XHJcbiAgICBpZiAobGVmdCA8IDApIHtcclxuICAgICAgdiA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKGxlZnQgPiBjb250YWluZXJXaWR0aCkge1xyXG4gICAgICB2ID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHYgPSBNYXRoLnJvdW5kKChsZWZ0ICogMTAwKSAvIGNvbnRhaW5lcldpZHRoKSAvIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoc3YgPSBuZXcgVGlueUNvbG9yKHRoaXMuaHNsKS50b0hzdigpO1xyXG4gICAgaWYgKGhzdi52ICE9PSB2KSB7XHJcbiAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgaDogdGhpcy5oc2wuaCxcclxuICAgICAgICBzOiAxMDAsXHJcbiAgICAgICAgdjogMSAtIHYsXHJcbiAgICAgICAgbDogdGhpcy5oc2wubCxcclxuICAgICAgICBhOiB0aGlzLmhzbC5hLFxyXG4gICAgICAgIHNvdXJjZTogJ3JnYicsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IGRhdGEsICRldmVudCB9KTtcclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbU2hhZGVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTaGFkZUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29vcmRpbmF0ZXNNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhZGVNb2R1bGUge31cclxuIl19