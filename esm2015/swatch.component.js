import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CheckboardModule } from './checkboard.component';
let SwatchComponent = class SwatchComponent {
    constructor() {
        this.style = {};
        this.focusStyle = {};
        this.onClick = new EventEmitter();
        this.onHover = new EventEmitter();
        this.divStyles = {};
        this.focusStyles = {};
        this.inFocus = false;
    }
    ngOnInit() {
        this.divStyles = Object.assign({ background: this.color, height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none' }, this.style);
    }
    currentStyles() {
        this.focusStyles = Object.assign({}, this.divStyles, this.focusStyle);
        return this.focus || this.inFocus ? this.focusStyles : this.divStyles;
    }
    handleFocusOut() {
        this.inFocus = false;
    }
    handleFocus() {
        this.inFocus = true;
    }
    handleHover(hex, $event) {
        this.onHover.emit({ hex, $event });
    }
    handleClick(hex, $event) {
        this.onClick.emit({ hex, $event });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SwatchComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SwatchComponent.prototype, "style", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SwatchComponent.prototype, "focusStyle", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SwatchComponent.prototype, "focus", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SwatchComponent.prototype, "onClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SwatchComponent.prototype, "onHover", void 0);
SwatchComponent = tslib_1.__decorate([
    Component({
        selector: 'color-swatch',
        template: `
    <div
      class="swatch"
      [ngStyle]="currentStyles()"
      [attr.title]="color"
      (click)="handleClick(color, $event)"
      (keydown.enter)="handleClick(color, $event)"
      (focus)="handleFocus()"
      (blur)="handleFocusOut()"
      (mouseover)="handleHover(color, $event)"
      tabindex="0"
    >
      <ng-content></ng-content>
      <color-checkboard
        *ngIf="color === 'transparent'"
        boxShadow="inset 0 0 0 1px rgba(0,0,0,0.1)"
      ></color-checkboard>
    </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], SwatchComponent);
export { SwatchComponent };
let SwatchModule = class SwatchModule {
};
SwatchModule = tslib_1.__decorate([
    NgModule({
        declarations: [SwatchComponent],
        exports: [SwatchComponent],
        imports: [CommonModule, CheckboardModule],
    })
], SwatchModule);
export { SwatchModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jb2xvci8iLCJzb3VyY2VzIjpbInN3YXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUF5QjFELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUF2QjVCO1FBeUJXLFVBQUssR0FBOEIsRUFBRSxDQUFDO1FBQ3RDLGVBQVUsR0FBOEIsRUFBRSxDQUFDO1FBRTFDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBa0MsQ0FBQztRQUM3RCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWtDLENBQUM7UUFDdkUsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDMUMsZ0JBQVcsR0FBOEIsRUFBRSxDQUFDO1FBQzVDLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFnQ2xCLENBQUM7SUE5QkMsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLG1CQUNaLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUN0QixNQUFNLEVBQUUsTUFBTSxFQUNkLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLFNBQVMsRUFDakIsUUFBUSxFQUFFLFVBQVUsRUFDcEIsT0FBTyxFQUFFLE1BQU0sSUFDWixJQUFJLENBQUMsS0FBSyxDQUNkLENBQUM7SUFDSixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxXQUFXLHFCQUNYLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FDbkIsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hFLENBQUM7SUFDRCxjQUFjO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQ0QsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELFdBQVcsQ0FBQyxHQUFHLEVBQUUsTUFBTTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FDRixDQUFBO0FBeENVO0lBQVIsS0FBSyxFQUFFOzs4Q0FBTztBQUNOO0lBQVIsS0FBSyxFQUFFOzs4Q0FBdUM7QUFDdEM7SUFBUixLQUFLLEVBQUU7O21EQUE0QztBQUMzQztJQUFSLEtBQUssRUFBRTs7OENBQWdCO0FBQ2Q7SUFBVCxNQUFNLEVBQUU7O2dEQUE4RDtBQUM3RDtJQUFULE1BQU0sRUFBRTs7Z0RBQThEO0FBTjVELGVBQWU7SUF2QjNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLGVBQWUsQ0F5QzNCO1NBekNZLGVBQWU7QUFnRDVCLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7Q0FBRyxDQUFBO0FBQWYsWUFBWTtJQUx4QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztLQUMxQyxDQUFDO0dBQ1csWUFBWSxDQUFHO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2hlY2tib2FyZE1vZHVsZSB9IGZyb20gJy4vY2hlY2tib2FyZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1zd2F0Y2gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwic3dhdGNoXCJcclxuICAgICAgW25nU3R5bGVdPVwiY3VycmVudFN0eWxlcygpXCJcclxuICAgICAgW2F0dHIudGl0bGVdPVwiY29sb3JcIlxyXG4gICAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soY29sb3IsICRldmVudClcIlxyXG4gICAgICAoa2V5ZG93bi5lbnRlcik9XCJoYW5kbGVDbGljayhjb2xvciwgJGV2ZW50KVwiXHJcbiAgICAgIChmb2N1cyk9XCJoYW5kbGVGb2N1cygpXCJcclxuICAgICAgKGJsdXIpPVwiaGFuZGxlRm9jdXNPdXQoKVwiXHJcbiAgICAgIChtb3VzZW92ZXIpPVwiaGFuZGxlSG92ZXIoY29sb3IsICRldmVudClcIlxyXG4gICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDxjb2xvci1jaGVja2JvYXJkXHJcbiAgICAgICAgKm5nSWY9XCJjb2xvciA9PT0gJ3RyYW5zcGFyZW50J1wiXHJcbiAgICAgICAgYm94U2hhZG93PVwiaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4xKVwiXHJcbiAgICAgID48L2NvbG9yLWNoZWNrYm9hcmQ+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3dhdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjb2xvcjtcclxuICBASW5wdXQoKSBzdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gIEBJbnB1dCgpIGZvY3VzU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBASW5wdXQoKSBmb2N1czogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8eyBoZXg6IHN0cmluZzsgJGV2ZW50OiBFdmVudCB9PigpO1xyXG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjx7IGhleDogc3RyaW5nOyAkZXZlbnQ6IEV2ZW50IH0+KCk7XHJcbiAgZGl2U3R5bGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgZm9jdXNTdHlsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBpbkZvY3VzID0gZmFsc2U7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kaXZTdHlsZXMgPSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuY29sb3IsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgLi4udGhpcy5zdHlsZSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGN1cnJlbnRTdHlsZXMoKSB7XHJcbiAgICB0aGlzLmZvY3VzU3R5bGVzID0ge1xyXG4gICAgICAuLi50aGlzLmRpdlN0eWxlcyxcclxuICAgICAgLi4udGhpcy5mb2N1c1N0eWxlLFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmZvY3VzIHx8IHRoaXMuaW5Gb2N1cyA/IHRoaXMuZm9jdXNTdHlsZXMgOiB0aGlzLmRpdlN0eWxlcztcclxuICB9XHJcbiAgaGFuZGxlRm9jdXNPdXQoKSB7XHJcbiAgICB0aGlzLmluRm9jdXMgPSBmYWxzZTtcclxuICB9XHJcbiAgaGFuZGxlRm9jdXMoKSB7XHJcbiAgICB0aGlzLmluRm9jdXMgPSB0cnVlO1xyXG4gIH1cclxuICBoYW5kbGVIb3ZlcihoZXgsICRldmVudCkge1xyXG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBoZXgsICRldmVudCB9KTtcclxuICB9XHJcbiAgaGFuZGxlQ2xpY2soaGV4LCAkZXZlbnQpIHtcclxuICAgIHRoaXMub25DbGljay5lbWl0KHsgaGV4LCAkZXZlbnQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1N3YXRjaENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1N3YXRjaENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2hlY2tib2FyZE1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTd2F0Y2hNb2R1bGUge31cclxuIl19