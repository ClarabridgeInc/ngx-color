import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
var HueComponent = /** @class */ (function () {
    function HueComponent() {
        this.hidePointer = false;
        this.direction = 'horizontal';
        this.onChange = new EventEmitter();
        this.left = '0px';
        this.top = '';
    }
    HueComponent.prototype.ngOnChanges = function () {
        if (this.direction === 'horizontal') {
            this.left = this.hsl.h * 100 / 360 + "%";
        }
        else {
            this.top = -(this.hsl.h * 100 / 360) + 100 + "%";
        }
    };
    HueComponent.prototype.handleChange = function (_a) {
        var top = _a.top, left = _a.left, containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, $event = _a.$event;
        var data;
        if (this.direction === 'vertical') {
            var h = void 0;
            if (top < 0) {
                h = 359;
            }
            else if (top > containerHeight) {
                h = 0;
            }
            else {
                var percent = -(top * 100 / containerHeight) + 100;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h: h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        else {
            var h = void 0;
            if (left < 0) {
                h = 0;
            }
            else if (left > containerWidth) {
                h = 359;
            }
            else {
                var percent = left * 100 / containerWidth;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h: h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
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
    ], HueComponent.prototype, "hsl", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], HueComponent.prototype, "pointer", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], HueComponent.prototype, "radius", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], HueComponent.prototype, "shadow", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], HueComponent.prototype, "hidePointer", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], HueComponent.prototype, "direction", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], HueComponent.prototype, "onChange", void 0);
    HueComponent = tslib_1.__decorate([
        Component({
            selector: 'color-hue',
            template: "\n  <div class=\"color-hue color-hue-{{direction}}\" [style.border-radius.px]=\"radius\" [style.box-shadow]=\"shadow\">\n    <div ngx-color-coordinates (coordinatesChange)=\"handleChange($event)\" class=\"color-hue-container\">\n      <div class=\"color-hue-pointer\" [style.left]=\"left\" [style.top]=\"top\" *ngIf=\"!hidePointer\">\n        <div class=\"color-hue-slider\" [ngStyle]=\"pointer\"></div>\n      </div>\n    </div>\n  </div>\n  ",
            preserveWhitespaces: false,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["\n    .color-hue {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .color-hue-container {\n      margin: 0 2px;\n      position: relative;\n      height: 100%;\n    }\n    .color-hue-pointer {\n      position: absolute;\n    }\n    .color-hue-slider {\n      margin-top: 1px;\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      transform: translateX(-2px);\n    }\n    .color-hue-horizontal {\n      background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n        33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n    }\n    .color-hue-vertical {\n      background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n    }\n  "]
        })
    ], HueComponent);
    return HueComponent;
}());
export { HueComponent };
var HueModule = /** @class */ (function () {
    function HueModule() {
    }
    HueModule = tslib_1.__decorate([
        NgModule({
            declarations: [HueComponent],
            exports: [HueComponent],
            imports: [CommonModule, CoordinatesModule],
        })
    ], HueModule);
    return HueModule;
}());
export { HueModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jb2xvci8iLCJzb3VyY2VzIjpbImh1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFxRDVEO0lBbERBO1FBdURXLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVMsR0FBOEIsWUFBWSxDQUFDO1FBQ25ELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztRQUM3RSxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsUUFBRyxHQUFHLEVBQUUsQ0FBQztJQXlEWCxDQUFDO0lBdkRDLGtDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssWUFBWSxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBRyxDQUFDO1NBQzFDO2FBQU07WUFDTCxJQUFJLENBQUMsR0FBRyxHQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFHLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBQ0QsbUNBQVksR0FBWixVQUFhLEVBQXNEO1lBQXBELFlBQUcsRUFBRSxjQUFJLEVBQUUsb0NBQWUsRUFBRSxrQ0FBYyxFQUFFLGtCQUFNO1FBQy9ELElBQUksSUFBZ0IsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQ2pDLElBQUksQ0FB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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXNNb2R1bGUgfSBmcm9tICcuL2Nvb3JkaW5hdGVzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhTTEEsIEhTTEFzb3VyY2UgfSBmcm9tICcuL2hlbHBlcnMvY29sb3IuaW50ZXJmYWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLWh1ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiY29sb3ItaHVlIGNvbG9yLWh1ZS17e2RpcmVjdGlvbn19XCIgW3N0eWxlLmJvcmRlci1yYWRpdXMucHhdPVwicmFkaXVzXCIgW3N0eWxlLmJveC1zaGFkb3ddPVwic2hhZG93XCI+XHJcbiAgICA8ZGl2IG5neC1jb2xvci1jb29yZGluYXRlcyAoY29vcmRpbmF0ZXNDaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIiBjbGFzcz1cImNvbG9yLWh1ZS1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLWh1ZS1wb2ludGVyXCIgW3N0eWxlLmxlZnRdPVwibGVmdFwiIFtzdHlsZS50b3BdPVwidG9wXCIgKm5nSWY9XCIhaGlkZVBvaW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItaHVlLXNsaWRlclwiIFtuZ1N0eWxlXT1cInBvaW50ZXJcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgLmNvbG9yLWh1ZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLWh1ZS1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb2xvci1odWUtcG9pbnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIC5jb2xvci1odWUtc2xpZGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICB3aWR0aDogNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjYpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XHJcbiAgICB9XHJcbiAgICAuY29sb3ItaHVlLWhvcml6b250YWwge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMDAgMCUsICNmZjAgMTclLCAjMGYwXHJcbiAgICAgICAgMzMlLCAjMGZmIDUwJSwgIzAwZiA2NyUsICNmMGYgODMlLCAjZjAwIDEwMCUpO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLWh1ZS12ZXJ0aWNhbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmMDAgMCUsICNmZjAgMTclLCAjMGYwIDMzJSxcclxuICAgICAgICAjMGZmIDUwJSwgIzAwZiA2NyUsICNmMGYgODMlLCAjZjAwIDEwMCUpO1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEh1ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgaHNsOiBIU0xBO1xyXG4gIEBJbnB1dCgpIHBvaW50ZXI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgcmFkaXVzOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc2hhZG93OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGlkZVBvaW50ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGE6IEhTTEFzb3VyY2U7ICRldmVudDogRXZlbnQgfT4oKTtcclxuICBsZWZ0ID0gJzBweCc7XHJcbiAgdG9wID0gJyc7XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgdGhpcy5sZWZ0ID0gYCR7dGhpcy5oc2wuaCAqIDEwMCAvIDM2MH0lYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG9wID0gYCR7LSh0aGlzLmhzbC5oICogMTAwIC8gMzYwKSArIDEwMH0lYDtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlKHsgdG9wLCBsZWZ0LCBjb250YWluZXJIZWlnaHQsIGNvbnRhaW5lcldpZHRoLCAkZXZlbnQgfSkge1xyXG4gICAgbGV0IGRhdGE6IEhTTEFzb3VyY2U7XHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgbGV0IGg7XHJcbiAgICAgIGlmICh0b3AgPCAwKSB7XHJcbiAgICAgICAgaCA9IDM1OTtcclxuICAgICAgfSBlbHNlIGlmICh0b3AgPiBjb250YWluZXJIZWlnaHQpIHtcclxuICAgICAgICBoID0gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gLSh0b3AgKiAxMDAgLyBjb250YWluZXJIZWlnaHQpICsgMTAwO1xyXG4gICAgICAgIGggPSAzNjAgKiBwZXJjZW50IC8gMTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5oc2wuaCAhPT0gaCkge1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICBoLFxyXG4gICAgICAgICAgczogdGhpcy5oc2wucyxcclxuICAgICAgICAgIGw6IHRoaXMuaHNsLmwsXHJcbiAgICAgICAgICBhOiB0aGlzLmhzbC5hLFxyXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgaDtcclxuICAgICAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgaCA9IDA7XHJcbiAgICAgIH0gZWxzZSBpZiAobGVmdCA+IGNvbnRhaW5lcldpZHRoKSB7XHJcbiAgICAgICAgaCA9IDM1OTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gbGVmdCAqIDEwMCAvIGNvbnRhaW5lcldpZHRoO1xyXG4gICAgICAgIGggPSAzNjAgKiBwZXJjZW50IC8gMTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5oc2wuaCAhPT0gaCkge1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICBoLFxyXG4gICAgICAgICAgczogdGhpcy5oc2wucyxcclxuICAgICAgICAgIGw6IHRoaXMuaHNsLmwsXHJcbiAgICAgICAgICBhOiB0aGlzLmhzbC5hLFxyXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhLCAkZXZlbnQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0h1ZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0h1ZUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29vcmRpbmF0ZXNNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSHVlTW9kdWxlIHt9XHJcbiJdfQ==