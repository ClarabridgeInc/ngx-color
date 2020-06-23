import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
var SketchPresetColorsComponent = /** @class */ (function () {
    function SketchPresetColorsComponent() {
        this.onClick = new EventEmitter();
        this.onSwatchHover = new EventEmitter();
        this.swatchStyle = {
            borderRadius: '3px',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
        };
    }
    SketchPresetColorsComponent.prototype.handleClick = function (_a) {
        var hex = _a.hex, $event = _a.$event;
        this.onClick.emit({ hex: hex, $event: $event });
    };
    SketchPresetColorsComponent.prototype.normalizeValue = function (val) {
        if (typeof val === 'string') {
            return { color: val };
        }
        return val;
    };
    SketchPresetColorsComponent.prototype.focusStyle = function (val) {
        var c = this.normalizeValue(val);
        return {
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + c.color,
        };
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SketchPresetColorsComponent.prototype, "colors", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SketchPresetColorsComponent.prototype, "onClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SketchPresetColorsComponent.prototype, "onSwatchHover", void 0);
    SketchPresetColorsComponent = tslib_1.__decorate([
        Component({
            selector: 'color-sketch-preset-colors',
            template: "\n  <div class=\"sketch-swatches\">\n    <div class=\"sketch-wrap\" *ngFor=\"let c of colors\">\n      <color-swatch\n        [color]=\"normalizeValue(c).color\"\n        [style]=\"swatchStyle\"\n        [focusStyle]=\"focusStyle(c)\"\n        (onClick)=\"handleClick($event)\"\n        (onHover)=\"onSwatchHover.emit($event)\"\n        class=\"swatch\"\n      ></color-swatch>\n    </div>\n  </div>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            styles: ["\n    .sketch-swatches {\n      margin: 0px -10px;\n      padding: 10px 0px 0px 10px;\n      border-top: 1px solid rgb(238, 238, 238);\n      display: flex;\n      flex-wrap: wrap;\n      position: relative;\n    }\n    .sketch-wrap {\n      width: 16px;\n      height: 16px;\n      margin: 0px 10px 10px 0px;\n    }\n  "]
        })
    ], SketchPresetColorsComponent);
    return SketchPresetColorsComponent;
}());
export { SketchPresetColorsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLXByZXNldC1jb2xvcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNvbG9yL3NrZXRjaC8iLCJzb3VyY2VzIjpbInNrZXRjaC1wcmVzZXQtY29sb3JzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUF3Q3ZCO0lBcENBO1FBc0NZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNsRCxnQkFBVyxHQUFHO1lBQ1osWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLGlDQUFpQztTQUM3QyxDQUFDO0lBaUJKLENBQUM7SUFmQyxpREFBVyxHQUFYLFVBQVksRUFBZTtZQUFiLFlBQUcsRUFBRSxrQkFBTTtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQWMsR0FBZCxVQUFlLEdBQW1CO1FBQ2hDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDdkI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDRCxnREFBVSxHQUFWLFVBQVcsR0FBbUI7UUFDNUIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxPQUFPO1lBQ0wsU0FBUyxFQUFFLDhDQUE0QyxDQUFDLENBQUMsS0FBTztTQUNqRSxDQUFDO0lBQ0osQ0FBQztJQXRCUTtRQUFSLEtBQUssRUFBRTs7K0RBQTRCO0lBQzFCO1FBQVQsTUFBTSxFQUFFOztnRUFBbUM7SUFDbEM7UUFBVCxNQUFNLEVBQUU7O3NFQUF5QztJQUh2QywyQkFBMkI7UUFwQ3ZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsUUFBUSxFQUFFLHFaQWFUO1lBa0JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLG1CQUFtQixFQUFFLEtBQUs7cUJBakJ4QixrVUFjRDtTQUlGLENBQUM7T0FDVywyQkFBMkIsQ0F3QnZDO0lBQUQsa0NBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXhCWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2hhcGUgfSBmcm9tICduZ3gtY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1za2V0Y2gtcHJlc2V0LWNvbG9ycycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwic2tldGNoLXN3YXRjaGVzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXdyYXBcIiAqbmdGb3I9XCJsZXQgYyBvZiBjb2xvcnNcIj5cclxuICAgICAgPGNvbG9yLXN3YXRjaFxyXG4gICAgICAgIFtjb2xvcl09XCJub3JtYWxpemVWYWx1ZShjKS5jb2xvclwiXHJcbiAgICAgICAgW3N0eWxlXT1cInN3YXRjaFN0eWxlXCJcclxuICAgICAgICBbZm9jdXNTdHlsZV09XCJmb2N1c1N0eWxlKGMpXCJcclxuICAgICAgICAob25DbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCJcclxuICAgICAgICAob25Ib3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgY2xhc3M9XCJzd2F0Y2hcIlxyXG4gICAgICA+PC9jb2xvci1zd2F0Y2g+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgLnNrZXRjaC1zd2F0Y2hlcyB7XHJcbiAgICAgIG1hcmdpbjogMHB4IC0xMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMTBweDtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuc2tldGNoLXdyYXAge1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNrZXRjaFByZXNldENvbG9yc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY29sb3JzOiBzdHJpbmdbXSB8IFNoYXBlW107XHJcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25Td2F0Y2hIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIHN3YXRjaFN0eWxlID0ge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcclxuICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCByZ2JhKDAsMCwwLC4xNSknLFxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsaWNrKHsgaGV4LCAkZXZlbnQgfSkge1xyXG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoeyBoZXgsICRldmVudCB9KTtcclxuICB9XHJcbiAgbm9ybWFsaXplVmFsdWUodmFsOiBzdHJpbmcgfCBTaGFwZSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB7IGNvbG9yOiB2YWwgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG4gIGZvY3VzU3R5bGUodmFsOiBzdHJpbmcgfCBTaGFwZSkge1xyXG4gICAgY29uc3QgYyA9IHRoaXMubm9ybWFsaXplVmFsdWUodmFsKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCByZ2JhKDAsMCwwLC4xNSksIDAgMCA0cHggJHtjLmNvbG9yfWAsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=