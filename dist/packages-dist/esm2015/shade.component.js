import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
import { TinyColor } from '@ctrl/tinycolor';
let ShadeComponent = class ShadeComponent {
    constructor() {
        this.onChange = new EventEmitter();
    }
    ngOnChanges() {
        this.gradient = {
            background: `linear-gradient(to right,
          hsl(${this.hsl.h}, 90%, 55%),
          #000)`,
        };
        const hsv = new TinyColor(this.hsl).toHsv();
        this.pointerLeft = 100 - (hsv.v * 100);
    }
    handleChange({ left, containerWidth, $event }) {
        let data;
        let v;
        if (left < 0) {
            v = 0;
        }
        else if (left > containerWidth) {
            v = 1;
        }
        else {
            v = Math.round((left * 100) / containerWidth) / 100;
        }
        const hsv = new TinyColor(this.hsl).toHsv();
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
        this.onChange.emit({ data, $event });
    }
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
        template: `
    <div class="shade" [style.border-radius]="radius">
      <div
        class="shade-gradient"
        [ngStyle]="gradient"
        [style.box-shadow]="shadow"
        [style.border-radius]="radius"
      ></div>
      <div
        ngx-color-coordinates
        (coordinatesChange)="handleChange($event)"
        class="shade-container"
      >
        <div
          class="shade-pointer"
          [style.left.%]="pointerLeft"
          [style.top.%]="pointerTop"
        >
          <div class="shade-slider" [ngStyle]="pointer"></div>
        </div>
      </div>
    </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        preserveWhitespaces: false,
        styles: [`
    .shade {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .shade-gradient {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .shade-container {
      position: relative;
      height: 100%;
      margin: 0 3px;
    }
    .shade-pointer {
      position: absolute;
    }
    .shade-slider {
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      margin-top: 1px;
      transform: translateX(-2px);
    },
  `]
    })
], ShadeComponent);
export { ShadeComponent };
let ShadeModule = class ShadeModule {
};
ShadeModule = tslib_1.__decorate([
    NgModule({
        declarations: [ShadeComponent],
        exports: [ShadeComponent],
        imports: [CommonModule, CoordinatesModule],
    })
], ShadeModule);
export { ShadeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNvbG9yLyIsInNvdXJjZXMiOlsic2hhZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBRVIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWtFNUMsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQS9EM0I7UUFxRVksYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUE0Qy9DLENBQUM7SUF2Q0MsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxVQUFVLEVBQUU7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNWO1NBQ1gsQ0FBQztRQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFO1FBQzNDLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSSxDQUFTLENBQUM7UUFDZCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1A7YUFBTSxJQUFJLElBQUksR0FBRyxjQUFjLEVBQUU7WUFDaEMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNQO2FBQU07WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDckQ7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksR0FBRztnQkFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDUixDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTSxFQUFFLEtBQUs7YUFDZCxDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGLENBQUE7QUFqRFU7SUFBUixLQUFLLEVBQUU7OzJDQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7OzJDQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7OytDQUFvQztBQUNuQztJQUFSLEtBQUssRUFBRTs7OENBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7OzhDQUFnQjtBQUNkO0lBQVQsTUFBTSxFQUFFOztnREFBb0M7QUFObEMsY0FBYztJQS9EMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUO1FBb0NELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLG1CQUFtQixFQUFFLEtBQUs7aUJBbkN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQ0Q7S0FJRixDQUFDO0dBQ1csY0FBYyxDQWtEMUI7U0FsRFksY0FBYztBQXlEM0IsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztDQUFHLENBQUE7QUFBZCxXQUFXO0lBTHZCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztRQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7UUFDekIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO0tBQzNDLENBQUM7R0FDVyxXQUFXLENBQUc7U0FBZCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvb3JkaW5hdGVzTW9kdWxlIH0gZnJvbSAnLi9jb29yZGluYXRlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBIU0xBLCBSR0JBIH0gZnJvbSAnLi9oZWxwZXJzL2NvbG9yLmludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBUaW55Q29sb3IgfSBmcm9tICdAY3RybC90aW55Y29sb3InO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3Itc2hhZGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwic2hhZGVcIiBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJyYWRpdXNcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwic2hhZGUtZ3JhZGllbnRcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImdyYWRpZW50XCJcclxuICAgICAgICBbc3R5bGUuYm94LXNoYWRvd109XCJzaGFkb3dcIlxyXG4gICAgICAgIFtzdHlsZS5ib3JkZXItcmFkaXVzXT1cInJhZGl1c1wiXHJcbiAgICAgID48L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIG5neC1jb2xvci1jb29yZGluYXRlc1xyXG4gICAgICAgIChjb29yZGluYXRlc0NoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgY2xhc3M9XCJzaGFkZS1jb250YWluZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJzaGFkZS1wb2ludGVyXCJcclxuICAgICAgICAgIFtzdHlsZS5sZWZ0LiVdPVwicG9pbnRlckxlZnRcIlxyXG4gICAgICAgICAgW3N0eWxlLnRvcC4lXT1cInBvaW50ZXJUb3BcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkZS1zbGlkZXJcIiBbbmdTdHlsZV09XCJwb2ludGVyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIC5zaGFkZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLnNoYWRlLWdyYWRpZW50IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuc2hhZGUtY29udGFpbmVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICB9XHJcbiAgICAuc2hhZGUtcG9pbnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIC5zaGFkZS1zbGlkZXIge1xyXG4gICAgICB3aWR0aDogNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjYpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcclxuICAgIH0sXHJcbiAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGhzbDogSFNMQTtcclxuICBASW5wdXQoKSByZ2I6IFJHQkE7XHJcbiAgQElucHV0KCkgcG9pbnRlcjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBzaGFkb3c6IHN0cmluZztcclxuICBASW5wdXQoKSByYWRpdXM6IHN0cmluZztcclxuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBncmFkaWVudDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBwb2ludGVyTGVmdDogbnVtYmVyO1xyXG4gIHBvaW50ZXJUb3A6IG51bWJlcjtcclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmdyYWRpZW50ID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LFxyXG4gICAgICAgICAgaHNsKCR7dGhpcy5oc2wuaH0sIDkwJSwgNTUlKSxcclxuICAgICAgICAgICMwMDApYCxcclxuICAgIH07XHJcbiAgICBjb25zdCBoc3YgPSBuZXcgVGlueUNvbG9yKHRoaXMuaHNsKS50b0hzdigpO1xyXG4gICAgdGhpcy5wb2ludGVyTGVmdCA9IDEwMCAtIChoc3YudiAqIDEwMCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoeyBsZWZ0LCBjb250YWluZXJXaWR0aCwgJGV2ZW50IH0pIHtcclxuICAgIGxldCBkYXRhO1xyXG4gICAgbGV0IHY6IG51bWJlcjtcclxuICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICB2ID0gMDtcclxuICAgIH0gZWxzZSBpZiAobGVmdCA+IGNvbnRhaW5lcldpZHRoKSB7XHJcbiAgICAgIHYgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdiA9IE1hdGgucm91bmQoKGxlZnQgKiAxMDApIC8gY29udGFpbmVyV2lkdGgpIC8gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhzdiA9IG5ldyBUaW55Q29sb3IodGhpcy5oc2wpLnRvSHN2KCk7XHJcbiAgICBpZiAoaHN2LnYgIT09IHYpIHtcclxuICAgICAgZGF0YSA9IHtcclxuICAgICAgICBoOiB0aGlzLmhzbC5oLFxyXG4gICAgICAgIHM6IDEwMCxcclxuICAgICAgICB2OiAxIC0gdixcclxuICAgICAgICBsOiB0aGlzLmhzbC5sLFxyXG4gICAgICAgIGE6IHRoaXMuaHNsLmEsXHJcbiAgICAgICAgc291cmNlOiAncmdiJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgZGF0YSwgJGV2ZW50IH0pO1xyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtTaGFkZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1NoYWRlQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb29yZGluYXRlc01vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFkZU1vZHVsZSB7fVxyXG4iXX0=