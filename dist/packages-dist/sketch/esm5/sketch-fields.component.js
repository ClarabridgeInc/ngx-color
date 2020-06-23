import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { isValidHex } from 'ngx-color';
var SketchFieldsComponent = /** @class */ (function () {
    function SketchFieldsComponent() {
        this.disableAlpha = false;
        this.onChange = new EventEmitter();
        this.input = {
            width: '100%',
            padding: '4px 10% 3px',
            border: 'none',
            boxSizing: 'border-box',
            boxShadow: 'inset 0 0 0 1px #ccc',
            fontSize: '11px',
        };
        this.label = {
            display: 'block',
            textAlign: 'center',
            fontSize: '11px',
            color: '#222',
            paddingTop: '3px',
            paddingBottom: '4px',
            textTransform: 'capitalize',
        };
    }
    SketchFieldsComponent.prototype.round = function (value) {
        return Math.round(value);
    };
    SketchFieldsComponent.prototype.handleChange = function (_a) {
        var data = _a.data, $event = _a.$event;
        if (data.hex) {
            if (isValidHex(data.hex)) {
                this.onChange.emit({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event: $event,
                });
            }
        }
        else if (data.r || data.g || data.b) {
            this.onChange.emit({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event: $event,
            });
        }
        else if (data.a) {
            if (data.a < 0) {
                data.a = 0;
            }
            else if (data.a > 100) {
                data.a = 100;
            }
            data.a /= 100;
            this.onChange.emit({
                data: {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: Math.round(data.a * 100) / 100,
                    source: 'rgb',
                },
                $event: $event,
            });
        }
        else if (data.h || data.s || data.l) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsl.h,
                    s: Number((data.s && data.s) || this.hsl.s),
                    l: Number((data.l && data.l) || this.hsl.l),
                    source: 'hsl',
                },
                $event: $event,
            });
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SketchFieldsComponent.prototype, "hsl", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SketchFieldsComponent.prototype, "rgb", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SketchFieldsComponent.prototype, "hex", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SketchFieldsComponent.prototype, "disableAlpha", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SketchFieldsComponent.prototype, "onChange", void 0);
    SketchFieldsComponent = tslib_1.__decorate([
        Component({
            selector: 'color-sketch-fields',
            template: "\n  <div class=\"sketch-fields\">\n    <div class=\"sketch-double\">\n      <color-editable-input\n        [style]=\"{ input: input, label: label }\"\n        label=\"hex\"\n        [value]=\"hex.replace('#', '')\"\n        (onChange)=\"handleChange($event)\"\n      ></color-editable-input>\n    </div>\n    <div class=\"sketch-single\">\n      <color-editable-input\n        [style]=\"{ input: input, label: label }\"\n        label=\"r\"\n        [value]=\"rgb.r\"\n        (onChange)=\"handleChange($event)\"\n        [dragLabel]=\"true\"\n        [dragMax]=\"255\"\n      ></color-editable-input>\n    </div>\n    <div class=\"sketch-single\">\n      <color-editable-input\n        [style]=\"{ input: input, label: label }\"\n        label=\"g\"\n        [value]=\"rgb.g\"\n        (onChange)=\"handleChange($event)\"\n        [dragLabel]=\"true\"\n        [dragMax]=\"255\"\n      ></color-editable-input>\n    </div>\n    <div class=\"sketch-single\">\n      <color-editable-input\n        [style]=\"{ input: input, label: label }\"\n        label=\"b\"\n        [value]=\"rgb.b\"\n        (onChange)=\"handleChange($event)\"\n        [dragLabel]=\"true\"\n        [dragMax]=\"255\"\n      ></color-editable-input>\n    </div>\n    <div class=\"sketch-alpha\" *ngIf=\"disableAlpha === false\">\n      <color-editable-input\n        [style]=\"{ input: input, label: label }\"\n        label=\"a\"\n        [value]=\"round(rgb.a * 100)\"\n        (onChange)=\"handleChange($event)\"\n        [dragLabel]=\"true\"\n        [dragMax]=\"100\"\n      ></color-editable-input>\n    </div>\n  </div>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            styles: ["\n    .sketch-fields {\n      display: flex;\n      padding-top: 4px;\n    }\n    .sketch-double {\n      -webkit-box-flex: 2;\n      flex: 2 1 0%;\n    }\n    .sketch-single {\n      flex: 1 1 0%;\n      padding-left: 6px;\n    }\n    .sketch-alpha {\n      -webkit-box-flex: 1;\n      flex: 1 1 0%;\n      padding-left: 6px;\n    }\n  "]
        })
    ], SketchFieldsComponent);
    return SketchFieldsComponent;
}());
export { SketchFieldsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLWZpZWxkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29sb3Ivc2tldGNoLyIsInNvdXJjZXMiOlsic2tldGNoLWZpZWxkcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxXQUFXLENBQUM7QUFnRm5EO0lBOUVBO1FBa0ZXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdDLFVBQUssR0FBNEI7WUFDL0IsS0FBSyxFQUFFLE1BQU07WUFDYixPQUFPLEVBQUUsYUFBYTtZQUN0QixNQUFNLEVBQUUsTUFBTTtZQUNkLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFNBQVMsRUFBRSxzQkFBc0I7WUFDakMsUUFBUSxFQUFFLE1BQU07U0FDakIsQ0FBQztRQUNGLFVBQUssR0FBNEI7WUFDL0IsT0FBTyxFQUFFLE9BQU87WUFDaEIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFLE1BQU07WUFDYixVQUFVLEVBQUUsS0FBSztZQUNqQixhQUFhLEVBQUUsS0FBSztZQUNwQixhQUFhLEVBQUUsWUFBWTtTQUM1QixDQUFDO0lBd0RKLENBQUM7SUF0REMscUNBQUssR0FBTCxVQUFNLEtBQUs7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELDRDQUFZLEdBQVosVUFBYSxFQUFnQjtZQUFkLGNBQUksRUFBRSxrQkFBTTtRQUN6QixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JB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LEVBQUUsS0FBSztxQkFyQnhCLG1WQWtCRDtTQUlGLENBQUM7T0FDVyxxQkFBcUIsQ0E4RWpDO0lBQUQsNEJBQUM7Q0FBQSxBQTlFRCxJQThFQztTQTlFWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNWYWxpZEhleCwgSFNMQSwgUkdCQSB9IGZyb20gJ25neC1jb2xvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXNrZXRjaC1maWVsZHMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInNrZXRjaC1maWVsZHNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJza2V0Y2gtZG91YmxlXCI+XHJcbiAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxyXG4gICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCwgbGFiZWw6IGxhYmVsIH1cIlxyXG4gICAgICAgIGxhYmVsPVwiaGV4XCJcclxuICAgICAgICBbdmFsdWVdPVwiaGV4LnJlcGxhY2UoJyMnLCAnJylcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXNpbmdsZVwiPlxyXG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcclxuICAgICAgICBsYWJlbD1cInJcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJyZ2IuclwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbZHJhZ0xhYmVsXT1cInRydWVcIlxyXG4gICAgICAgIFtkcmFnTWF4XT1cIjI1NVwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXNpbmdsZVwiPlxyXG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcclxuICAgICAgICBsYWJlbD1cImdcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJyZ2IuZ1wiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbZHJhZ0xhYmVsXT1cInRydWVcIlxyXG4gICAgICAgIFtkcmFnTWF4XT1cIjI1NVwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXNpbmdsZVwiPlxyXG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcclxuICAgICAgICBsYWJlbD1cImJcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJyZ2IuYlwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbZHJhZ0xhYmVsXT1cInRydWVcIlxyXG4gICAgICAgIFtkcmFnTWF4XT1cIjI1NVwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWFscGhhXCIgKm5nSWY9XCJkaXNhYmxlQWxwaGEgPT09IGZhbHNlXCI+XHJcbiAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxyXG4gICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCwgbGFiZWw6IGxhYmVsIH1cIlxyXG4gICAgICAgIGxhYmVsPVwiYVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInJvdW5kKHJnYi5hICogMTAwKVwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbZHJhZ0xhYmVsXT1cInRydWVcIlxyXG4gICAgICAgIFtkcmFnTWF4XT1cIjEwMFwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIC5za2V0Y2gtZmllbGRzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIH1cclxuICAgIC5za2V0Y2gtZG91YmxlIHtcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMjtcclxuICAgICAgZmxleDogMiAxIDAlO1xyXG4gICAgfVxyXG4gICAgLnNrZXRjaC1zaW5nbGUge1xyXG4gICAgICBmbGV4OiAxIDEgMCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgfVxyXG4gICAgLnNrZXRjaC1hbHBoYSB7XHJcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgIGZsZXg6IDEgMSAwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2tldGNoRmllbGRzQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBoc2w6IEhTTEE7XHJcbiAgQElucHV0KCkgcmdiOiBSR0JBO1xyXG4gIEBJbnB1dCgpIGhleDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVBbHBoYSA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIGlucHV0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiAnNHB4IDEwJSAzcHgnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCAjY2NjJyxcclxuICAgIGZvbnRTaXplOiAnMTFweCcsXHJcbiAgfTtcclxuICBsYWJlbDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAnMTFweCcsXHJcbiAgICBjb2xvcjogJyMyMjInLFxyXG4gICAgcGFkZGluZ1RvcDogJzNweCcsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAnNHB4JyxcclxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICB9O1xyXG5cclxuICByb3VuZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xyXG4gIH1cclxuICBoYW5kbGVDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xyXG4gICAgaWYgKGRhdGEuaGV4KSB7XHJcbiAgICAgIGlmIChpc1ZhbGlkSGV4KGRhdGEuaGV4KSkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGhleDogZGF0YS5oZXgsXHJcbiAgICAgICAgICAgIHNvdXJjZTogJ2hleCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJGV2ZW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuciB8fCBkYXRhLmcgfHwgZGF0YS5iKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcjogZGF0YS5yIHx8IHRoaXMucmdiLnIsXHJcbiAgICAgICAgICBnOiBkYXRhLmcgfHwgdGhpcy5yZ2IuZyxcclxuICAgICAgICAgIGI6IGRhdGEuYiB8fCB0aGlzLnJnYi5iLFxyXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICRldmVudCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuYSkge1xyXG4gICAgICBpZiAoZGF0YS5hIDwgMCkge1xyXG4gICAgICAgIGRhdGEuYSA9IDA7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5hID4gMTAwKSB7XHJcbiAgICAgICAgZGF0YS5hID0gMTAwO1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGEuYSAvPSAxMDA7XHJcblxyXG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGg6IHRoaXMuaHNsLmgsXHJcbiAgICAgICAgICBzOiB0aGlzLmhzbC5zLFxyXG4gICAgICAgICAgbDogdGhpcy5oc2wubCxcclxuICAgICAgICAgIGE6IE1hdGgucm91bmQoZGF0YS5hICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgIHNvdXJjZTogJ3JnYicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAkZXZlbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLmggfHwgZGF0YS5zIHx8IGRhdGEubCkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGg6IGRhdGEuaCB8fCB0aGlzLmhzbC5oLFxyXG4gICAgICAgICAgczogTnVtYmVyKChkYXRhLnMgJiYgZGF0YS5zKSB8fCB0aGlzLmhzbC5zKSxcclxuICAgICAgICAgIGw6IE51bWJlcigoZGF0YS5sICYmIGRhdGEubCkgfHwgdGhpcy5oc2wubCksXHJcbiAgICAgICAgICBzb3VyY2U6ICdoc2wnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJGV2ZW50LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19