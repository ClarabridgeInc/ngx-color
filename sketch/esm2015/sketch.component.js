import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { AlphaModule, CheckboardModule, ColorWrap, EditableInputModule, HueModule, SaturationModule, SwatchModule, isValidHex, } from 'ngx-color';
import { SketchFieldsComponent } from './sketch-fields.component';
import { SketchPresetColorsComponent } from './sketch-preset-colors.component';
let SketchComponent = class SketchComponent extends ColorWrap {
    constructor() {
        super();
        /** Remove alpha slider and options from picker */
        this.disableAlpha = false;
        /** Hex strings for default colors at bottom of picker */
        this.presetColors = [
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
        this.width = 200;
    }
    afterValidChange() {
        this.activeBackground = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${this.rgb.a})`;
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            // this.hex = hex;
            this.handleChange({
                hex,
                source: 'hex',
            }, $event);
        }
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
        template: `
  <div class="sketch-picker {{ className }}" [style.width]="width">
    <div class="sketch-saturation">
      <color-saturation [hsl]="hsl" [hsv]="hsv"
        (onChange)="handleValueChange($event)"
      >
      </color-saturation>
    </div>
    <div class="sketch-controls">
      <div class="sketch-sliders">
        <div class="sketch-hue">
          <color-hue [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-hue>
        </div>
        <div class="sketch-alpha" *ngIf="disableAlpha === false">
          <color-alpha
            [radius]="2" [rgb]="rgb" [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-alpha>
        </div>
      </div>
      <div class="sketch-color">
        <color-checkboard></color-checkboard>
        <div class="sketch-active" [style.background]="activeBackground"></div>
      </div>
    </div>
    <div class="sketch-controls">
      <color-sketch-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-sketch-fields>
    </div>
    <div class="sketch-controls">
      <color-sketch-preset-colors
        [colors]="presetColors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-sketch-preset-colors>
    </div>
  </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        preserveWhitespaces: false,
        styles: [`
    .sketch-picker {
      padding: 10px 10px 0;
      box-sizing: initial;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15);
    }
    .sketch-saturation {
      width: 100%;
      padding-bottom: 75%;
      position: relative;
      overflow: hidden;
    }
    .sketch-controls {
      display: flex;
    }
    .sketch-sliders {
      padding: 4px 0px;
      -webkit-box-flex: 1;
      flex: 1 1 0%;
    }
    .sketch-hue {
      position: relative;
      height: 10px;
      overflow: hidden;
    }
    .sketch-alpha {
      position: relative;
      height: 10px;
      margin-top: 4px;
      overflow: hidden;
    }
    .sketch-color {
      width: 24px;
      height: 24px;
      position: relative;
      margin-top: 4px;
      margin-left: 4px;
      border-radius: 3px;
    }
    .sketch-active {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      border-radius: 2px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px 4px inset;
    }
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SketchComponent);
export { SketchComponent };
let ColorSketchModule = class ColorSketchModule {
};
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
export { ColorSketchModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jb2xvci9za2V0Y2gvIiwic291cmNlcyI6WyJza2V0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQXVHL0UsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxTQUFTO0lBd0I1QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBeEJWLGtEQUFrRDtRQUN6QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUM5Qix5REFBeUQ7UUFDaEQsaUJBQVksR0FBRztZQUN0QixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7U0FDVixDQUFDO1FBQ0Ysc0JBQXNCO1FBQ2IsVUFBSyxHQUFHLEdBQUcsQ0FBQztJQUlyQixDQUFDO0lBQ0QsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM3RixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7UUFDL0IsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkIsa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQ2Y7Z0JBQ0UsR0FBRztnQkFDSCxNQUFNLEVBQUUsS0FBSzthQUNkLEVBQ0QsTUFBTSxDQUNQLENBQUM7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFBO0FBM0NVO0lBQVIsS0FBSyxFQUFFOztxREFBc0I7QUFFckI7SUFBUixLQUFLLEVBQUU7O3FEQWdCTjtBQUVPO0lBQVIsS0FBSyxFQUFFOzs4Q0FBYTtBQXRCVixlQUFlO0lBckczQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBDVDtRQXNERCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2lCQXJEeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0REO0tBSUYsQ0FBQzs7R0FDVyxlQUFlLENBNkMzQjtTQTdDWSxlQUFlO0FBb0U1QixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUFHLENBQUE7QUFBcEIsaUJBQWlCO0lBckI3QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixlQUFlO1lBQ2YscUJBQXFCO1lBQ3JCLDJCQUEyQjtTQUM1QjtRQUNELE9BQU8sRUFBRTtZQUNQLGVBQWU7WUFDZixxQkFBcUI7WUFDckIsMkJBQTJCO1NBQzVCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLFNBQVM7WUFDVCxnQkFBZ0I7WUFDaEIsWUFBWTtTQUNiO0tBQ0YsQ0FBQztHQUNXLGlCQUFpQixDQUFHO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBbHBoYU1vZHVsZSxcclxuICBDaGVja2JvYXJkTW9kdWxlLFxyXG4gIENvbG9yV3JhcCxcclxuICBFZGl0YWJsZUlucHV0TW9kdWxlLFxyXG4gIEh1ZU1vZHVsZSxcclxuICBTYXR1cmF0aW9uTW9kdWxlLFxyXG4gIFN3YXRjaE1vZHVsZSxcclxuICBpc1ZhbGlkSGV4LFxyXG59IGZyb20gJ25neC1jb2xvcic7XHJcbmltcG9ydCB7IFNrZXRjaEZpZWxkc0NvbXBvbmVudCB9IGZyb20gJy4vc2tldGNoLWZpZWxkcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTa2V0Y2hQcmVzZXRDb2xvcnNDb21wb25lbnQgfSBmcm9tICcuL3NrZXRjaC1wcmVzZXQtY29sb3JzLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXNrZXRjaCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwic2tldGNoLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIiBbc3R5bGUud2lkdGhdPVwid2lkdGhcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJza2V0Y2gtc2F0dXJhdGlvblwiPlxyXG4gICAgICA8Y29sb3Itc2F0dXJhdGlvbiBbaHNsXT1cImhzbFwiIFtoc3ZdPVwiaHN2XCJcclxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgID5cclxuICAgICAgPC9jb2xvci1zYXR1cmF0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWNvbnRyb2xzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJza2V0Y2gtc2xpZGVyc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJza2V0Y2gtaHVlXCI+XHJcbiAgICAgICAgICA8Y29sb3ItaHVlIFtoc2xdPVwiaHNsXCJcclxuICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgPjwvY29sb3ItaHVlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJza2V0Y2gtYWxwaGFcIiAqbmdJZj1cImRpc2FibGVBbHBoYSA9PT0gZmFsc2VcIj5cclxuICAgICAgICAgIDxjb2xvci1hbHBoYVxyXG4gICAgICAgICAgICBbcmFkaXVzXT1cIjJcIiBbcmdiXT1cInJnYlwiIFtoc2xdPVwiaHNsXCJcclxuICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgPjwvY29sb3ItYWxwaGE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWNvbG9yXCI+XHJcbiAgICAgICAgPGNvbG9yLWNoZWNrYm9hcmQ+PC9jb2xvci1jaGVja2JvYXJkPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJza2V0Y2gtYWN0aXZlXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYWN0aXZlQmFja2dyb3VuZFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNrZXRjaC1jb250cm9sc1wiPlxyXG4gICAgICA8Y29sb3Itc2tldGNoLWZpZWxkc1xyXG4gICAgICAgIFtyZ2JdPVwicmdiXCIgW2hzbF09XCJoc2xcIiBbaGV4XT1cImhleFwiXHJcbiAgICAgICAgW2Rpc2FibGVBbHBoYV09XCJkaXNhYmxlQWxwaGFcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgPjwvY29sb3Itc2tldGNoLWZpZWxkcz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNrZXRjaC1jb250cm9sc1wiPlxyXG4gICAgICA8Y29sb3Itc2tldGNoLXByZXNldC1jb2xvcnNcclxuICAgICAgICBbY29sb3JzXT1cInByZXNldENvbG9yc1wiXHJcbiAgICAgICAgKG9uQ2xpY2spPVwiaGFuZGxlQmxvY2tDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKG9uU3dhdGNoSG92ZXIpPVwib25Td2F0Y2hIb3Zlci5lbWl0KCRldmVudClcIlxyXG4gICAgICA+PC9jb2xvci1za2V0Y2gtcHJlc2V0LWNvbG9ycz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAuc2tldGNoLXBpY2tlciB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwO1xyXG4gICAgICBib3gtc2l6aW5nOiBpbml0aWFsO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsMCwwLC4xNSksIDAgOHB4IDE2cHggcmdiYSgwLDAsMCwuMTUpO1xyXG4gICAgfVxyXG4gICAgLnNrZXRjaC1zYXR1cmF0aW9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3NSU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5za2V0Y2gtY29udHJvbHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLnNrZXRjaC1zbGlkZXJzIHtcclxuICAgICAgcGFkZGluZzogNHB4IDBweDtcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgZmxleDogMSAxIDAlO1xyXG4gICAgfVxyXG4gICAgLnNrZXRjaC1odWUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5za2V0Y2gtYWxwaGEge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLnNrZXRjaC1jb2xvciB7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB9XHJcbiAgICAuc2tldGNoLWFjdGl2ZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggMHB4IDBweCAxcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDBweCA0cHggaW5zZXQ7XHJcbiAgICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2tldGNoQ29tcG9uZW50IGV4dGVuZHMgQ29sb3JXcmFwIHtcclxuICAvKiogUmVtb3ZlIGFscGhhIHNsaWRlciBhbmQgb3B0aW9ucyBmcm9tIHBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVBbHBoYSA9IGZhbHNlO1xyXG4gIC8qKiBIZXggc3RyaW5ncyBmb3IgZGVmYXVsdCBjb2xvcnMgYXQgYm90dG9tIG9mIHBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIHByZXNldENvbG9ycyA9IFtcclxuICAgICcjRDAwMjFCJyxcclxuICAgICcjRjVBNjIzJyxcclxuICAgICcjRjhFNzFDJyxcclxuICAgICcjOEI1NzJBJyxcclxuICAgICcjN0VEMzIxJyxcclxuICAgICcjNDE3NTA1JyxcclxuICAgICcjQkQxMEUwJyxcclxuICAgICcjOTAxM0ZFJyxcclxuICAgICcjNEE5MEUyJyxcclxuICAgICcjNTBFM0MyJyxcclxuICAgICcjQjhFOTg2JyxcclxuICAgICcjMDAwMDAwJyxcclxuICAgICcjNEE0QTRBJyxcclxuICAgICcjOUI5QjlCJyxcclxuICAgICcjRkZGRkZGJyxcclxuICBdO1xyXG4gIC8qKiBXaWR0aCBvZiBwaWNrZXIgKi9cclxuICBASW5wdXQoKSB3aWR0aCA9IDIwMDtcclxuICBhY3RpdmVCYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuICBhZnRlclZhbGlkQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5hY3RpdmVCYWNrZ3JvdW5kID0gYHJnYmEoJHt0aGlzLnJnYi5yfSwgJHt0aGlzLnJnYi5nfSwgJHt0aGlzLnJnYi5ifSwgJHt0aGlzLnJnYi5hfSlgO1xyXG4gIH1cclxuICBoYW5kbGVWYWx1ZUNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShkYXRhLCAkZXZlbnQpO1xyXG4gIH1cclxuICBoYW5kbGVCbG9ja0NoYW5nZSh7IGhleCwgJGV2ZW50IH0pIHtcclxuICAgIGlmIChpc1ZhbGlkSGV4KGhleCkpIHtcclxuICAgICAgLy8gdGhpcy5oZXggPSBoZXg7XHJcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhleCxcclxuICAgICAgICAgIHNvdXJjZTogJ2hleCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAkZXZlbnQsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2tldGNoQ29tcG9uZW50LFxyXG4gICAgU2tldGNoRmllbGRzQ29tcG9uZW50LFxyXG4gICAgU2tldGNoUHJlc2V0Q29sb3JzQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2tldGNoQ29tcG9uZW50LFxyXG4gICAgU2tldGNoRmllbGRzQ29tcG9uZW50LFxyXG4gICAgU2tldGNoUHJlc2V0Q29sb3JzQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQWxwaGFNb2R1bGUsXHJcbiAgICBDaGVja2JvYXJkTW9kdWxlLFxyXG4gICAgRWRpdGFibGVJbnB1dE1vZHVsZSxcclxuICAgIEh1ZU1vZHVsZSxcclxuICAgIFNhdHVyYXRpb25Nb2R1bGUsXHJcbiAgICBTd2F0Y2hNb2R1bGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yU2tldGNoTW9kdWxlIHt9XHJcbiJdfQ==