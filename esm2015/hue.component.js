import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
let HueComponent = class HueComponent {
    constructor() {
        this.hidePointer = false;
        this.direction = 'horizontal';
        this.onChange = new EventEmitter();
        this.left = '0px';
        this.top = '';
    }
    ngOnChanges() {
        if (this.direction === 'horizontal') {
            this.left = `${this.hsl.h * 100 / 360}%`;
        }
        else {
            this.top = `${-(this.hsl.h * 100 / 360) + 100}%`;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let h;
            if (top < 0) {
                h = 359;
            }
            else if (top > containerHeight) {
                h = 0;
            }
            else {
                const percent = -(top * 100 / containerHeight) + 100;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        else {
            let h;
            if (left < 0) {
                h = 0;
            }
            else if (left > containerWidth) {
                h = 359;
            }
            else {
                const percent = left * 100 / containerWidth;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
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
        this.onChange.emit({ data, $event });
    }
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
        template: `
  <div class="color-hue color-hue-{{direction}}" [style.border-radius.px]="radius" [style.box-shadow]="shadow">
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="color-hue-container">
      <div class="color-hue-pointer" [style.left]="left" [style.top]="top" *ngIf="!hidePointer">
        <div class="color-hue-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `,
        preserveWhitespaces: false,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [`
    .color-hue {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .color-hue-container {
      margin: 0 2px;
      position: relative;
      height: 100%;
    }
    .color-hue-pointer {
      position: absolute;
    }
    .color-hue-slider {
      margin-top: 1px;
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      transform: translateX(-2px);
    }
    .color-hue-horizontal {
      background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
        33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    }
    .color-hue-vertical {
      background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    }
  `]
    })
], HueComponent);
export { HueComponent };
let HueModule = class HueModule {
};
HueModule = tslib_1.__decorate([
    NgModule({
        declarations: [HueComponent],
        exports: [HueComponent],
        imports: [CommonModule, CoordinatesModule],
    })
], HueModule);
export { HueModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jb2xvci8iLCJzb3VyY2VzIjpbImh1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFxRDVELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFsRHpCO1FBdURXLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVMsR0FBOEIsWUFBWSxDQUFDO1FBQ25ELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztRQUM3RSxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsUUFBRyxHQUFHLEVBQUUsQ0FBQztJQXlEWCxDQUFDO0lBdkRDLFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssWUFBWSxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDMUM7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUNELFlBQVksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUU7UUFDakUsSUFBSSxJQUFnQixDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUU7WUFDakMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUNUO2lCQUFNLElBQUksR0FBRyxHQUFHLGVBQWUsRUFBRTtnQkFDaEMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNQO2lCQUFNO2dCQUNMLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLGVBQWUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDckQsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLElBQUksR0FBRztvQkFDTCxDQUFDO29CQUNELENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNiLE1BQU0sRUFBRSxLQUFLO2lCQUNkLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ1A7aUJBQU0sSUFBSSxJQUFJLEdBQUcsY0FBYyxFQUFFO2dCQUNoQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQ1Q7aUJBQU07Z0JBQ0wsTUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxjQUFjLENBQUM7Z0JBQzVDLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQzthQUN6QjtZQUVELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixJQUFJLEdBQUc7b0JBQ0wsQ0FBQztvQkFDRCxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNiLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDYixNQUFNLEVBQUUsS0FBSztpQkFDZCxDQUFDO2FBQ0g7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0YsQ0FBQTtBQWpFVTtJQUFSLEtBQUssRUFBRTs7eUNBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTs7NkNBQW9DO0FBQ25DO0lBQVIsS0FBSyxFQUFFOzs0Q0FBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTs7NENBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7O2lEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTs7K0NBQXFEO0FBQ25EO0lBQVQsTUFBTSxFQUFFOzs4Q0FBb0U7QUFQbEUsWUFBWTtJQWxEeEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO1FBcUNELG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBcEM3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNEO0tBSUYsQ0FBQztHQUNXLFlBQVksQ0FrRXhCO1NBbEVZLFlBQVk7QUF5RXpCLElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7Q0FBRyxDQUFBO0FBQVosU0FBUztJQUxyQixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQztLQUMzQyxDQUFDO0dBQ1csU0FBUyxDQUFHO1NBQVosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXNNb2R1bGUgfSBmcm9tICcuL2Nvb3JkaW5hdGVzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhTTEEsIEhTTEFzb3VyY2UgfSBmcm9tICcuL2hlbHBlcnMvY29sb3IuaW50ZXJmYWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLWh1ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiY29sb3ItaHVlIGNvbG9yLWh1ZS17e2RpcmVjdGlvbn19XCIgW3N0eWxlLmJvcmRlci1yYWRpdXMucHhdPVwicmFkaXVzXCIgW3N0eWxlLmJveC1zaGFkb3ddPVwic2hhZG93XCI+XHJcbiAgICA8ZGl2IG5neC1jb2xvci1jb29yZGluYXRlcyAoY29vcmRpbmF0ZXNDaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIiBjbGFzcz1cImNvbG9yLWh1ZS1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLWh1ZS1wb2ludGVyXCIgW3N0eWxlLmxlZnRdPVwibGVmdFwiIFtzdHlsZS50b3BdPVwidG9wXCIgKm5nSWY9XCIhaGlkZVBvaW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItaHVlLXNsaWRlclwiIFtuZ1N0eWxlXT1cInBvaW50ZXJcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgLmNvbG9yLWh1ZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLWh1ZS1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb2xvci1odWUtcG9pbnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIC5jb2xvci1odWUtc2xpZGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICB3aWR0aDogNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjYpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XHJcbiAgICB9XHJcbiAgICAuY29sb3ItaHVlLWhvcml6b250YWwge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMDAgMCUsICNmZjAgMTclLCAjMGYwXHJcbiAgICAgICAgMzMlLCAjMGZmIDUwJSwgIzAwZiA2NyUsICNmMGYgODMlLCAjZjAwIDEwMCUpO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLWh1ZS12ZXJ0aWNhbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmMDAgMCUsICNmZjAgMTclLCAjMGYwIDMzJSxcclxuICAgICAgICAjMGZmIDUwJSwgIzAwZiA2NyUsICNmMGYgODMlLCAjZjAwIDEwMCUpO1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEh1ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgaHNsOiBIU0xBO1xyXG4gIEBJbnB1dCgpIHBvaW50ZXI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgcmFkaXVzOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc2hhZG93OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGlkZVBvaW50ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGE6IEhTTEFzb3VyY2U7ICRldmVudDogRXZlbnQgfT4oKTtcclxuICBsZWZ0ID0gJzBweCc7XHJcbiAgdG9wID0gJyc7XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgdGhpcy5sZWZ0ID0gYCR7dGhpcy5oc2wuaCAqIDEwMCAvIDM2MH0lYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG9wID0gYCR7LSh0aGlzLmhzbC5oICogMTAwIC8gMzYwKSArIDEwMH0lYDtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlKHsgdG9wLCBsZWZ0LCBjb250YWluZXJIZWlnaHQsIGNvbnRhaW5lcldpZHRoLCAkZXZlbnQgfSkge1xyXG4gICAgbGV0IGRhdGE6IEhTTEFzb3VyY2U7XHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgbGV0IGg7XHJcbiAgICAgIGlmICh0b3AgPCAwKSB7XHJcbiAgICAgICAgaCA9IDM1OTtcclxuICAgICAgfSBlbHNlIGlmICh0b3AgPiBjb250YWluZXJIZWlnaHQpIHtcclxuICAgICAgICBoID0gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gLSh0b3AgKiAxMDAgLyBjb250YWluZXJIZWlnaHQpICsgMTAwO1xyXG4gICAgICAgIGggPSAzNjAgKiBwZXJjZW50IC8gMTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5oc2wuaCAhPT0gaCkge1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICBoLFxyXG4gICAgICAgICAgczogdGhpcy5oc2wucyxcclxuICAgICAgICAgIGw6IHRoaXMuaHNsLmwsXHJcbiAgICAgICAgICBhOiB0aGlzLmhzbC5hLFxyXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgaDtcclxuICAgICAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgaCA9IDA7XHJcbiAgICAgIH0gZWxzZSBpZiAobGVmdCA+IGNvbnRhaW5lcldpZHRoKSB7XHJcbiAgICAgICAgaCA9IDM1OTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gbGVmdCAqIDEwMCAvIGNvbnRhaW5lcldpZHRoO1xyXG4gICAgICAgIGggPSAzNjAgKiBwZXJjZW50IC8gMTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5oc2wuaCAhPT0gaCkge1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICBoLFxyXG4gICAgICAgICAgczogdGhpcy5oc2wucyxcclxuICAgICAgICAgIGw6IHRoaXMuaHNsLmwsXHJcbiAgICAgICAgICBhOiB0aGlzLmhzbC5hLFxyXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhLCAkZXZlbnQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0h1ZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0h1ZUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29vcmRpbmF0ZXNNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSHVlTW9kdWxlIHt9XHJcbiJdfQ==