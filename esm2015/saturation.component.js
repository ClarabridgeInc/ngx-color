import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
let SaturationComponent = class SaturationComponent {
    constructor() {
        this.onChange = new EventEmitter();
    }
    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 100%, 50%)`;
        this.pointerTop = -(this.hsv.v * 100) + 1 + 100 + '%';
        this.pointerLeft = this.hsv.s * 100 + '%';
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
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
        const saturation = left / containerWidth;
        let bright = -(top / containerHeight) + 1;
        bright = bright > 0 ? bright : 0;
        bright = bright > 1 ? 1 : bright;
        const data = {
            h: this.hsl.h,
            s: saturation,
            v: bright,
            a: this.hsl.a,
            source: 'hsva',
        };
        this.onChange.emit({ data, $event });
    }
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
        template: `
  <div class="color-saturation" ngx-color-coordinates (coordinatesChange)="handleChange($event)" [style.background]="background">
    <div class="saturation-white">
      <div class="saturation-black"></div>
      <div class="saturation-pointer" [ngStyle]="pointer" [style.top]="pointerTop" [style.left]="pointerLeft">
        <div class="saturation-circle" [ngStyle]="circle"></div>
      </div>
    </div>
  </div>
  `,
        preserveWhitespaces: false,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [`
    .saturation-white {
      background: linear-gradient(to right, #fff, rgba(255,255,255,0));
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .saturation-black {
      background: linear-gradient(to top, #000, rgba(0,0,0,0));
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .color-saturation {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .saturation-pointer {
      position: absolute;
      cursor: default;
    }
    .saturation-circle {
      width: 4px;
      height: 4px;
      box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);
      border-radius: 50%;
      cursor: hand;
      transform: translate(-2px, -4px);
    }
  `]
    })
], SaturationComponent);
export { SaturationComponent };
let SaturationModule = class SaturationModule {
};
SaturationModule = tslib_1.__decorate([
    NgModule({
        declarations: [SaturationComponent],
        exports: [SaturationComponent],
        imports: [CommonModule, CoordinatesModule],
    })
], SaturationModule);
export { SaturationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F0dXJhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29sb3IvIiwic291cmNlcyI6WyJzYXR1cmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUVSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQXlENUQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUF0RGhDO1FBNERZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztJQW1DL0UsQ0FBQztJQTlCQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQzVDLENBQUM7SUFDRCxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFO1FBQ2pFLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjthQUFNLElBQUksSUFBSSxHQUFHLGNBQWMsRUFBRTtZQUNoQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDVDthQUFNLElBQUksR0FBRyxHQUFHLGVBQWUsRUFBRTtZQUNoQyxHQUFHLEdBQUcsZUFBZSxDQUFDO1NBQ3ZCO1FBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLGNBQWMsQ0FBQztRQUN6QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRWpDLE1BQU0sSUFBSSxHQUFlO1lBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDLEVBQUUsVUFBVTtZQUNiLENBQUMsRUFBRSxNQUFNO1lBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGLENBQUE7QUF4Q1U7SUFBUixLQUFLLEVBQUU7O2dEQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7O2dEQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7O21EQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFOztvREFBb0M7QUFDbkM7SUFBUixLQUFLLEVBQUU7O21EQUFtQztBQUNqQztJQUFULE1BQU0sRUFBRTs7cURBQW9FO0FBTmxFLG1CQUFtQjtJQXREL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO1FBd0NELG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBdkM3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NEO0tBSUYsQ0FBQztHQUNXLG1CQUFtQixDQXlDL0I7U0F6Q1ksbUJBQW1CO0FBZ0RoQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFHLENBQUE7QUFBbkIsZ0JBQWdCO0lBTDVCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzlCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQztLQUMzQyxDQUFDO0dBQ1csZ0JBQWdCLENBQUc7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXNNb2R1bGUgfSBmcm9tICcuL2Nvb3JkaW5hdGVzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhTTEEsIEhTVkEsIEhTVkFzb3VyY2UgfSBmcm9tICcuL2hlbHBlcnMvY29sb3IuaW50ZXJmYWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXNhdHVyYXRpb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImNvbG9yLXNhdHVyYXRpb25cIiBuZ3gtY29sb3ItY29vcmRpbmF0ZXMgKGNvb3JkaW5hdGVzQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNhdHVyYXRpb24td2hpdGVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNhdHVyYXRpb24tYmxhY2tcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNhdHVyYXRpb24tcG9pbnRlclwiIFtuZ1N0eWxlXT1cInBvaW50ZXJcIiBbc3R5bGUudG9wXT1cInBvaW50ZXJUb3BcIiBbc3R5bGUubGVmdF09XCJwb2ludGVyTGVmdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzYXR1cmF0aW9uLWNpcmNsZVwiIFtuZ1N0eWxlXT1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAuc2F0dXJhdGlvbi13aGl0ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLnNhdHVyYXRpb24tYmxhY2sge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDAwLCByZ2JhKDAsMCwwLDApKTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuY29sb3Itc2F0dXJhdGlvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLnNhdHVyYXRpb24tcG9pbnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gICAgLnNhdHVyYXRpb24tY2lyY2xlIHtcclxuICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDEuNXB4ICNmZmYsIGluc2V0IDAgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjMpLCAwIDAgMXB4IDJweCByZ2JhKDAsMCwwLC40KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBjdXJzb3I6IGhhbmQ7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC00cHgpO1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNhdHVyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGhzbDogSFNMQTtcclxuICBASW5wdXQoKSBoc3Y6IEhTVkE7XHJcbiAgQElucHV0KCkgcmFkaXVzOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcG9pbnRlcjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBjaXJjbGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGE6IEhTVkFzb3VyY2U7ICRldmVudDogRXZlbnQgfT4oKTtcclxuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgcG9pbnRlclRvcDogc3RyaW5nO1xyXG4gIHBvaW50ZXJMZWZ0OiBzdHJpbmc7XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gYGhzbCgke3RoaXMuaHNsLmh9LCAxMDAlLCA1MCUpYDtcclxuICAgIHRoaXMucG9pbnRlclRvcCA9IC0odGhpcy5oc3YudiAqIDEwMCkgKyAxICsgMTAwICsgJyUnO1xyXG4gICAgdGhpcy5wb2ludGVyTGVmdCA9IHRoaXMuaHN2LnMgKiAxMDAgKyAnJSc7XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZSh7IHRvcCwgbGVmdCwgY29udGFpbmVySGVpZ2h0LCBjb250YWluZXJXaWR0aCwgJGV2ZW50IH0pIHtcclxuICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICBsZWZ0ID0gMDtcclxuICAgIH0gZWxzZSBpZiAobGVmdCA+IGNvbnRhaW5lcldpZHRoKSB7XHJcbiAgICAgIGxlZnQgPSBjb250YWluZXJXaWR0aDtcclxuICAgIH0gZWxzZSBpZiAodG9wIDwgMCkge1xyXG4gICAgICB0b3AgPSAwO1xyXG4gICAgfSBlbHNlIGlmICh0b3AgPiBjb250YWluZXJIZWlnaHQpIHtcclxuICAgICAgdG9wID0gY29udGFpbmVySGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNhdHVyYXRpb24gPSBsZWZ0IC8gY29udGFpbmVyV2lkdGg7XHJcbiAgICBsZXQgYnJpZ2h0ID0gLSh0b3AgLyBjb250YWluZXJIZWlnaHQpICsgMTtcclxuICAgIGJyaWdodCA9IGJyaWdodCA+IDAgPyBicmlnaHQgOiAwO1xyXG4gICAgYnJpZ2h0ID0gYnJpZ2h0ID4gMSA/IDEgOiBicmlnaHQ7XHJcblxyXG4gICAgY29uc3QgZGF0YTogSFNWQXNvdXJjZSA9IHtcclxuICAgICAgaDogdGhpcy5oc2wuaCxcclxuICAgICAgczogc2F0dXJhdGlvbixcclxuICAgICAgdjogYnJpZ2h0LFxyXG4gICAgICBhOiB0aGlzLmhzbC5hLFxyXG4gICAgICBzb3VyY2U6ICdoc3ZhJyxcclxuICAgIH07XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhLCAkZXZlbnQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1NhdHVyYXRpb25Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTYXR1cmF0aW9uQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb29yZGluYXRlc01vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYXR1cmF0aW9uTW9kdWxlIHt9XHJcbiJdfQ==