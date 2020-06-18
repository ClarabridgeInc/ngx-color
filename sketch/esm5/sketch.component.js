import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { AlphaModule, CheckboardModule, ColorWrap, EditableInputModule, HueModule, SaturationModule, SwatchModule, isValidHex, } from 'ngx-color';
import { SketchFieldsComponent } from './sketch-fields.component';
import { SketchPresetColorsComponent } from './sketch-preset-colors.component';
var SketchComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SketchComponent, _super);
    function SketchComponent() {
        var _this = _super.call(this) || this;
        /** Remove alpha slider and options from picker */
        _this.disableAlpha = false;
        /** Hex strings for default colors at bottom of picker */
        _this.presetColors = [
            '#D0021B',
            '#F5A623',
            '#F8E71C',
            '#8B572A',
            '#7ED321',
            '#417505',
            '#BD10E0',
            '#9013FE',
            '#4A90E2',
            '#50E3C2',
            '#B8E986',
            '#000000',
            '#4A4A4A',
            '#9B9B9B',
            '#FFFFFF',
        ];
        /** Width of picker */
        _this.width = 200;
        return _this;
    }
    SketchComponent.prototype.afterValidChange = function () {
        this.activeBackground = "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + this.rgb.a + ")";
    };
    SketchComponent.prototype.handleValueChange = function (_a) {
        var data = _a.data, $event = _a.$event;
        this.handleChange(data, $event);
    };
    SketchComponent.prototype.handleBlockChange = function (_a) {
        var hex = _a.hex, $event = _a.$event;
        if (isValidHex(hex)) {
            // this.hex = hex;
            this.handleChange({
                hex: hex,
                source: 'hex',
            }, $event);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SketchComponent.prototype, "disableAlpha", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SketchComponent.prototype, "presetColors", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SketchComponent.prototype, "width", void 0);
    SketchComponent = tslib_1.__decorate([
        Component({
            selector: 'color-sketch',
            template: "\n  <div class=\"sketch-picker {{ className }}\" [style.width]=\"width\">\n    <div class=\"sketch-saturation\">\n      <color-saturation [hsl]=\"hsl\" [hsv]=\"hsv\"\n        (onChange)=\"handleValueChange($event)\"\n      >\n      </color-saturation>\n    </div>\n    <div class=\"sketch-controls\">\n      <div class=\"sketch-sliders\">\n        <div class=\"sketch-hue\">\n          <color-hue [hsl]=\"hsl\"\n            (onChange)=\"handleValueChange($event)\"\n          ></color-hue>\n        </div>\n        <div class=\"sketch-alpha\" *ngIf=\"disableAlpha === false\">\n          <color-alpha\n            [radius]=\"2\" [rgb]=\"rgb\" [hsl]=\"hsl\"\n            (onChange)=\"handleValueChange($event)\"\n          ></color-alpha>\n        </div>\n      </div>\n      <div class=\"sketch-color\">\n        <color-checkboard></color-checkboard>\n        <div class=\"sketch-active\" [style.background]=\"activeBackground\"></div>\n      </div>\n    </div>\n    <div class=\"sketch-controls\">\n      <color-sketch-fields\n        [rgb]=\"rgb\" [hsl]=\"hsl\" [hex]=\"hex\"\n        [disableAlpha]=\"disableAlpha\"\n        (onChange)=\"handleValueChange($event)\"\n      ></color-sketch-fields>\n    </div>\n    <div class=\"sketch-controls\">\n      <color-sketch-preset-colors\n        [colors]=\"presetColors\"\n        (onClick)=\"handleBlockChange($event)\"\n        (onSwatchHover)=\"onSwatchHover.emit($event)\"\n      ></color-sketch-preset-colors>\n    </div>\n  </div>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            styles: ["\n    .sketch-picker {\n      padding: 10px 10px 0;\n      box-sizing: initial;\n      background: #fff;\n      border-radius: 4px;\n      box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15);\n    }\n    .sketch-saturation {\n      width: 100%;\n      padding-bottom: 75%;\n      position: relative;\n      overflow: hidden;\n    }\n    .sketch-controls {\n      display: flex;\n    }\n    .sketch-sliders {\n      padding: 4px 0px;\n      -webkit-box-flex: 1;\n      flex: 1 1 0%;\n    }\n    .sketch-hue {\n      position: relative;\n      height: 10px;\n      overflow: hidden;\n    }\n    .sketch-alpha {\n      position: relative;\n      height: 10px;\n      margin-top: 4px;\n      overflow: hidden;\n    }\n    .sketch-color {\n      width: 24px;\n      height: 24px;\n      position: relative;\n      margin-top: 4px;\n      margin-left: 4px;\n      border-radius: 3px;\n    }\n    .sketch-active {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n      border-radius: 2px;\n      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px 4px inset;\n    }\n  "]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SketchComponent);
    return SketchComponent;
}(ColorWrap));
export { SketchComponent };
var ColorSketchModule = /** @class */ (function () {
    function ColorSketchModule() {
    }
    ColorSketchModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                SketchComponent,
                SketchFieldsComponent,
                SketchPresetColorsComponent,
            ],
            exports: [
                SketchComponent,
                SketchFieldsComponent,
                SketchPresetColorsComponent,
            ],
            imports: [
                CommonModule,
                AlphaModule,
                CheckboardModule,
                EditableInputModule,
                HueModule,
                SaturationModule,
                SwatchModule,
            ],
        })
    ], ColorSketchModule);
    return ColorSketchModule;
}());
export { ColorSketchModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jb2xvci9za2V0Y2gvIiwic291cmNlcyI6WyJza2V0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQXVHL0U7SUFBcUMsMkNBQVM7SUF3QjVDO1FBQUEsWUFDRSxpQkFBTyxTQUNSO1FBekJELGtEQUFrRDtRQUN6QyxrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUM5Qix5REFBeUQ7UUFDaEQsa0JBQVksR0FBRztZQUN0QixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7U0FDVixDQUFDO1FBQ0Ysc0JBQXNCO1FBQ2IsV0FBSyxHQUFHLEdBQUcsQ0FBQzs7SUFJckIsQ0FBQztJQUNELDBDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFHLENBQUM7SUFDN0YsQ0FBQztJQUNELDJDQUFpQixHQUFqQixVQUFrQixFQUFnQjtZQUFkLGNBQUksRUFBRSxrQkFBTTtRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsMkNBQWlCLEdBQWpCLFVBQWtCLEVBQWU7WUFBYixZQUFHLEVBQUUsa0JBQU07UUFDN0IsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkIsa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQ2Y7Z0JBQ0UsR0FBRyxLQUFBO2dCQUNILE1BQU0sRUFBRSxLQUFLO2FBQ2QsRUFDRCxNQUFNLENBQ1AsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQTFDUTtRQUFSLEtBQUssRUFBRTs7eURBQXNCO0lBRXJCO1FBQVIsS0FBSyxFQUFFOzt5REFnQk47SUFFTztRQUFSLEtBQUssRUFBRTs7a0RBQWE7SUF0QlYsZUFBZTtRQXJHM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLGk5Q0EwQ1Q7WUFzREQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsbUJBQW1CLEVBQUUsS0FBSztxQkFyRHhCLDBvQ0FrREQ7U0FJRixDQUFDOztPQUNXLGVBQWUsQ0E2QzNCO0lBQUQsc0JBQUM7Q0FBQSxBQTdDRCxDQUFxQyxTQUFTLEdBNkM3QztTQTdDWSxlQUFlO0FBb0U1QjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsaUJBQWlCO1FBckI3QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osZUFBZTtnQkFDZixxQkFBcUI7Z0JBQ3JCLDJCQUEyQjthQUM1QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxlQUFlO2dCQUNmLHFCQUFxQjtnQkFDckIsMkJBQTJCO2FBQzVCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxnQkFBZ0I7Z0JBQ2hCLG1CQUFtQjtnQkFDbkIsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLFlBQVk7YUFDYjtTQUNGLENBQUM7T0FDVyxpQkFBaUIsQ0FBRztJQUFELHdCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgTmdNb2R1bGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFscGhhTW9kdWxlLFxyXG4gIENoZWNrYm9hcmRNb2R1bGUsXHJcbiAgQ29sb3JXcmFwLFxyXG4gIEVkaXRhYmxlSW5wdXRNb2R1bGUsXHJcbiAgSHVlTW9kdWxlLFxyXG4gIFNhdHVyYXRpb25Nb2R1bGUsXHJcbiAgU3dhdGNoTW9kdWxlLFxyXG4gIGlzVmFsaWRIZXgsXHJcbn0gZnJvbSAnbmd4LWNvbG9yJztcclxuaW1wb3J0IHsgU2tldGNoRmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi9za2V0Y2gtZmllbGRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNrZXRjaFByZXNldENvbG9yc0NvbXBvbmVudCB9IGZyb20gJy4vc2tldGNoLXByZXNldC1jb2xvcnMuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3Itc2tldGNoJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJza2V0Y2gtcGlja2VyIHt7IGNsYXNzTmFtZSB9fVwiIFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNrZXRjaC1zYXR1cmF0aW9uXCI+XHJcbiAgICAgIDxjb2xvci1zYXR1cmF0aW9uIFtoc2xdPVwiaHNsXCIgW2hzdl09XCJoc3ZcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgPlxyXG4gICAgICA8L2NvbG9yLXNhdHVyYXRpb24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJza2V0Y2gtY29udHJvbHNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNrZXRjaC1zbGlkZXJzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNrZXRjaC1odWVcIj5cclxuICAgICAgICAgIDxjb2xvci1odWUgW2hzbF09XCJoc2xcIlxyXG4gICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICA+PC9jb2xvci1odWU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNrZXRjaC1hbHBoYVwiICpuZ0lmPVwiZGlzYWJsZUFscGhhID09PSBmYWxzZVwiPlxyXG4gICAgICAgICAgPGNvbG9yLWFscGhhXHJcbiAgICAgICAgICAgIFtyYWRpdXNdPVwiMlwiIFtyZ2JdPVwicmdiXCIgW2hzbF09XCJoc2xcIlxyXG4gICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICA+PC9jb2xvci1hbHBoYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJza2V0Y2gtY29sb3JcIj5cclxuICAgICAgICA8Y29sb3ItY2hlY2tib2FyZD48L2NvbG9yLWNoZWNrYm9hcmQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNrZXRjaC1hY3RpdmVcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJhY3RpdmVCYWNrZ3JvdW5kXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWNvbnRyb2xzXCI+XHJcbiAgICAgIDxjb2xvci1za2V0Y2gtZmllbGRzXHJcbiAgICAgICAgW3JnYl09XCJyZ2JcIiBbaHNsXT1cImhzbFwiIFtoZXhdPVwiaGV4XCJcclxuICAgICAgICBbZGlzYWJsZUFscGhhXT1cImRpc2FibGVBbHBoYVwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICA+PC9jb2xvci1za2V0Y2gtZmllbGRzPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWNvbnRyb2xzXCI+XHJcbiAgICAgIDxjb2xvci1za2V0Y2gtcHJlc2V0LWNvbG9yc1xyXG4gICAgICAgIFtjb2xvcnNdPVwicHJlc2V0Q29sb3JzXCJcclxuICAgICAgICAob25DbGljayk9XCJoYW5kbGVCbG9ja0NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAob25Td2F0Y2hIb3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgID48L2NvbG9yLXNrZXRjaC1wcmVzZXQtY29sb3JzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIC5za2V0Y2gtcGlja2VyIHtcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4IDA7XHJcbiAgICAgIGJveC1zaXppbmc6IGluaXRpYWw7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwwLDAsLjE1KSwgMCA4cHggMTZweCByZ2JhKDAsMCwwLC4xNSk7XHJcbiAgICB9XHJcbiAgICAuc2tldGNoLXNhdHVyYXRpb24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDc1JTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLnNrZXRjaC1jb250cm9scyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAuc2tldGNoLXNsaWRlcnMge1xyXG4gICAgICBwYWRkaW5nOiA0cHggMHB4O1xyXG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgICBmbGV4OiAxIDEgMCU7XHJcbiAgICB9XHJcbiAgICAuc2tldGNoLWh1ZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLnNrZXRjaC1hbHBoYSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuc2tldGNoLWNvbG9yIHtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuICAgIC5za2V0Y2gtYWN0aXZlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCAwcHggMHB4IDFweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMHB4IDRweCBpbnNldDtcclxuICAgIH1cclxuICBgLFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTa2V0Y2hDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAge1xyXG4gIC8qKiBSZW1vdmUgYWxwaGEgc2xpZGVyIGFuZCBvcHRpb25zIGZyb20gcGlja2VyICovXHJcbiAgQElucHV0KCkgZGlzYWJsZUFscGhhID0gZmFsc2U7XHJcbiAgLyoqIEhleCBzdHJpbmdzIGZvciBkZWZhdWx0IGNvbG9ycyBhdCBib3R0b20gb2YgcGlja2VyICovXHJcbiAgQElucHV0KCkgcHJlc2V0Q29sb3JzID0gW1xyXG4gICAgJyNEMDAyMUInLFxyXG4gICAgJyNGNUE2MjMnLFxyXG4gICAgJyNGOEU3MUMnLFxyXG4gICAgJyM4QjU3MkEnLFxyXG4gICAgJyM3RUQzMjEnLFxyXG4gICAgJyM0MTc1MDUnLFxyXG4gICAgJyNCRDEwRTAnLFxyXG4gICAgJyM5MDEzRkUnLFxyXG4gICAgJyM0QTkwRTInLFxyXG4gICAgJyM1MEUzQzInLFxyXG4gICAgJyNCOEU5ODYnLFxyXG4gICAgJyMwMDAwMDAnLFxyXG4gICAgJyM0QTRBNEEnLFxyXG4gICAgJyM5QjlCOUInLFxyXG4gICAgJyNGRkZGRkYnLFxyXG4gIF07XHJcbiAgLyoqIFdpZHRoIG9mIHBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIHdpZHRoID0gMjAwO1xyXG4gIGFjdGl2ZUJhY2tncm91bmQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG4gIGFmdGVyVmFsaWRDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZUJhY2tncm91bmQgPSBgcmdiYSgke3RoaXMucmdiLnJ9LCAke3RoaXMucmdiLmd9LCAke3RoaXMucmdiLmJ9LCAke3RoaXMucmdiLmF9KWA7XHJcbiAgfVxyXG4gIGhhbmRsZVZhbHVlQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGRhdGEsICRldmVudCk7XHJcbiAgfVxyXG4gIGhhbmRsZUJsb2NrQ2hhbmdlKHsgaGV4LCAkZXZlbnQgfSkge1xyXG4gICAgaWYgKGlzVmFsaWRIZXgoaGV4KSkge1xyXG4gICAgICAvLyB0aGlzLmhleCA9IGhleDtcclxuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGV4LFxyXG4gICAgICAgICAgc291cmNlOiAnaGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICRldmVudCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTa2V0Y2hDb21wb25lbnQsXHJcbiAgICBTa2V0Y2hGaWVsZHNDb21wb25lbnQsXHJcbiAgICBTa2V0Y2hQcmVzZXRDb2xvcnNDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTa2V0Y2hDb21wb25lbnQsXHJcbiAgICBTa2V0Y2hGaWVsZHNDb21wb25lbnQsXHJcbiAgICBTa2V0Y2hQcmVzZXRDb2xvcnNDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBBbHBoYU1vZHVsZSxcclxuICAgIENoZWNrYm9hcmRNb2R1bGUsXHJcbiAgICBFZGl0YWJsZUlucHV0TW9kdWxlLFxyXG4gICAgSHVlTW9kdWxlLFxyXG4gICAgU2F0dXJhdGlvbk1vZHVsZSxcclxuICAgIFN3YXRjaE1vZHVsZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JTa2V0Y2hNb2R1bGUge31cclxuIl19