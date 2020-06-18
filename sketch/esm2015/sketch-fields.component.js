import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { isValidHex } from 'ngx-color';
let SketchFieldsComponent = class SketchFieldsComponent {
    constructor() {
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
    round(value) {
        return Math.round(value);
    }
    handleChange({ data, $event }) {
        if (data.hex) {
            if (isValidHex(data.hex)) {
                this.onChange.emit({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event,
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
                $event,
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
                $event,
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
                $event,
            });
        }
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
        template: `
  <div class="sketch-fields">
    <div class="sketch-double">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="hex"
        [value]="hex.replace('#', '')"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="r"
        [value]="rgb.r"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="g"
        [value]="rgb.g"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="b"
        [value]="rgb.b"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-alpha" *ngIf="disableAlpha === false">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="a"
        [value]="round(rgb.a * 100)"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="100"
      ></color-editable-input>
    </div>
  </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        preserveWhitespaces: false,
        styles: [`
    .sketch-fields {
      display: flex;
      padding-top: 4px;
    }
    .sketch-double {
      -webkit-box-flex: 2;
      flex: 2 1 0%;
    }
    .sketch-single {
      flex: 1 1 0%;
      padding-left: 6px;
    }
    .sketch-alpha {
      -webkit-box-flex: 1;
      flex: 1 1 0%;
      padding-left: 6px;
    }
  `]
    })
], SketchFieldsComponent);
export { SketchFieldsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLWZpZWxkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29sb3Ivc2tldGNoLyIsInNvdXJjZXMiOlsic2tldGNoLWZpZWxkcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxXQUFXLENBQUM7QUFnRm5ELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBOUVsQztRQWtGVyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM3QyxVQUFLLEdBQTRCO1lBQy9CLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLGFBQWE7WUFDdEIsTUFBTSxFQUFFLE1BQU07WUFDZCxTQUFTLEVBQUUsWUFBWTtZQUN2QixTQUFTLEVBQUUsc0JBQXNCO1lBQ2pDLFFBQVEsRUFBRSxNQUFNO1NBQ2pCLENBQUM7UUFDRixVQUFLLEdBQTRCO1lBQy9CLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxNQUFNO1lBQ2IsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsYUFBYSxFQUFFLFlBQVk7U0FDNUIsQ0FBQztJQXdESixDQUFDO0lBdERDLEtBQUssQ0FBQyxLQUFLO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQzNCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLElBQUksRUFBRTt3QkFDSixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7d0JBQ2IsTUFBTSxFQUFFLEtBQUs7cUJBQ2Q7b0JBQ0QsTUFBTTtpQkFDUCxDQUFDLENBQUM7YUFDSjtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFO29CQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sRUFBRSxLQUFLO2lCQUNkO2dCQUNELE1BQU07YUFDUCxDQUFDLENBQUM7U0FDSjthQUFNLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ1o7aUJBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDZDtZQUNELElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1lBRWQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksRUFBRTtvQkFDSixDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNiLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUc7b0JBQ2pDLE1BQU0sRUFBRSxLQUFLO2lCQUNkO2dCQUNELE1BQU07YUFDUCxDQUFDLENBQUM7U0FDSjthQUFNLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksRUFBRTtvQkFDSixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzQyxNQUFNLEVBQUUsS0FBSztpQkFDZDtnQkFDRCxNQUFNO2FBQ1AsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTdFVTtJQUFSLEtBQUssRUFBRTs7a0RBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTs7a0RBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTs7a0RBQWE7QUFDWjtJQUFSLEtBQUssRUFBRTs7MkRBQXNCO0FBQ3BCO0lBQVQsTUFBTSxFQUFFOzt1REFBb0M7QUFMbEMscUJBQXFCO0lBOUVqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbURUO1FBc0JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLG1CQUFtQixFQUFFLEtBQUs7aUJBckJ4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JEO0tBSUYsQ0FBQztHQUNXLHFCQUFxQixDQThFakM7U0E5RVkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzVmFsaWRIZXgsIEhTTEEsIFJHQkEgfSBmcm9tICduZ3gtY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1za2V0Y2gtZmllbGRzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJza2V0Y2gtZmllbGRzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWRvdWJsZVwiPlxyXG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcclxuICAgICAgICBsYWJlbD1cImhleFwiXHJcbiAgICAgICAgW3ZhbHVlXT1cImhleC5yZXBsYWNlKCcjJywgJycpXCJcclxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNrZXRjaC1zaW5nbGVcIj5cclxuICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XHJcbiAgICAgICAgW3N0eWxlXT1cInsgaW5wdXQ6IGlucHV0LCBsYWJlbDogbGFiZWwgfVwiXHJcbiAgICAgICAgbGFiZWw9XCJyXCJcclxuICAgICAgICBbdmFsdWVdPVwicmdiLnJcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW2RyYWdMYWJlbF09XCJ0cnVlXCJcclxuICAgICAgICBbZHJhZ01heF09XCIyNTVcIlxyXG4gICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNrZXRjaC1zaW5nbGVcIj5cclxuICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XHJcbiAgICAgICAgW3N0eWxlXT1cInsgaW5wdXQ6IGlucHV0LCBsYWJlbDogbGFiZWwgfVwiXHJcbiAgICAgICAgbGFiZWw9XCJnXCJcclxuICAgICAgICBbdmFsdWVdPVwicmdiLmdcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW2RyYWdMYWJlbF09XCJ0cnVlXCJcclxuICAgICAgICBbZHJhZ01heF09XCIyNTVcIlxyXG4gICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNrZXRjaC1zaW5nbGVcIj5cclxuICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XHJcbiAgICAgICAgW3N0eWxlXT1cInsgaW5wdXQ6IGlucHV0LCBsYWJlbDogbGFiZWwgfVwiXHJcbiAgICAgICAgbGFiZWw9XCJiXCJcclxuICAgICAgICBbdmFsdWVdPVwicmdiLmJcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW2RyYWdMYWJlbF09XCJ0cnVlXCJcclxuICAgICAgICBbZHJhZ01heF09XCIyNTVcIlxyXG4gICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNrZXRjaC1hbHBoYVwiICpuZ0lmPVwiZGlzYWJsZUFscGhhID09PSBmYWxzZVwiPlxyXG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcclxuICAgICAgICBsYWJlbD1cImFcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJyb3VuZChyZ2IuYSAqIDEwMClcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW2RyYWdMYWJlbF09XCJ0cnVlXCJcclxuICAgICAgICBbZHJhZ01heF09XCIxMDBcIlxyXG4gICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAuc2tldGNoLWZpZWxkcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICB9XHJcbiAgICAuc2tldGNoLWRvdWJsZSB7XHJcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDI7XHJcbiAgICAgIGZsZXg6IDIgMSAwJTtcclxuICAgIH1cclxuICAgIC5za2V0Y2gtc2luZ2xlIHtcclxuICAgICAgZmxleDogMSAxIDAlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgIH1cclxuICAgIC5za2V0Y2gtYWxwaGEge1xyXG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgICBmbGV4OiAxIDEgMCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNrZXRjaEZpZWxkc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaHNsOiBIU0xBO1xyXG4gIEBJbnB1dCgpIHJnYjogUkdCQTtcclxuICBASW5wdXQoKSBoZXg6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlQWxwaGEgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBpbnB1dDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcGFkZGluZzogJzRweCAxMCUgM3B4JyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHggI2NjYycsXHJcbiAgICBmb250U2l6ZTogJzExcHgnLFxyXG4gIH07XHJcbiAgbGFiZWw6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzExcHgnLFxyXG4gICAgY29sb3I6ICcjMjIyJyxcclxuICAgIHBhZGRpbmdUb3A6ICczcHgnLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzRweCcsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcbiAgfTtcclxuXHJcbiAgcm91bmQodmFsdWUpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlKTtcclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcclxuICAgIGlmIChkYXRhLmhleCkge1xyXG4gICAgICBpZiAoaXNWYWxpZEhleChkYXRhLmhleCkpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBoZXg6IGRhdGEuaGV4LFxyXG4gICAgICAgICAgICBzb3VyY2U6ICdoZXgnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICRldmVudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkYXRhLnIgfHwgZGF0YS5nIHx8IGRhdGEuYikge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHI6IGRhdGEuciB8fCB0aGlzLnJnYi5yLFxyXG4gICAgICAgICAgZzogZGF0YS5nIHx8IHRoaXMucmdiLmcsXHJcbiAgICAgICAgICBiOiBkYXRhLmIgfHwgdGhpcy5yZ2IuYixcclxuICAgICAgICAgIHNvdXJjZTogJ3JnYicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAkZXZlbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLmEpIHtcclxuICAgICAgaWYgKGRhdGEuYSA8IDApIHtcclxuICAgICAgICBkYXRhLmEgPSAwO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGEuYSA+IDEwMCkge1xyXG4gICAgICAgIGRhdGEuYSA9IDEwMDtcclxuICAgICAgfVxyXG4gICAgICBkYXRhLmEgLz0gMTAwO1xyXG5cclxuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBoOiB0aGlzLmhzbC5oLFxyXG4gICAgICAgICAgczogdGhpcy5oc2wucyxcclxuICAgICAgICAgIGw6IHRoaXMuaHNsLmwsXHJcbiAgICAgICAgICBhOiBNYXRoLnJvdW5kKGRhdGEuYSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgICBzb3VyY2U6ICdyZ2InLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJGV2ZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5oIHx8IGRhdGEucyB8fCBkYXRhLmwpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBoOiBkYXRhLmggfHwgdGhpcy5oc2wuaCxcclxuICAgICAgICAgIHM6IE51bWJlcigoZGF0YS5zICYmIGRhdGEucykgfHwgdGhpcy5oc2wucyksXHJcbiAgICAgICAgICBsOiBOdW1iZXIoKGRhdGEubCAmJiBkYXRhLmwpIHx8IHRoaXMuaHNsLmwpLFxyXG4gICAgICAgICAgc291cmNlOiAnaHNsJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICRldmVudCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==