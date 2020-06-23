import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CheckboardModule } from './checkboard.component';
var SwatchComponent = /** @class */ (function () {
    function SwatchComponent() {
        this.style = {};
        this.focusStyle = {};
        this.onClick = new EventEmitter();
        this.onHover = new EventEmitter();
        this.divStyles = {};
        this.focusStyles = {};
        this.inFocus = false;
    }
    SwatchComponent.prototype.ngOnInit = function () {
        this.divStyles = tslib_1.__assign({ background: this.color, height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none' }, this.style);
    };
    SwatchComponent.prototype.currentStyles = function () {
        this.focusStyles = tslib_1.__assign({}, this.divStyles, this.focusStyle);
        return this.focus || this.inFocus ? this.focusStyles : this.divStyles;
    };
    SwatchComponent.prototype.handleFocusOut = function () {
        this.inFocus = false;
    };
    SwatchComponent.prototype.handleFocus = function () {
        this.inFocus = true;
    };
    SwatchComponent.prototype.handleHover = function (hex, $event) {
        this.onHover.emit({ hex: hex, $event: $event });
    };
    SwatchComponent.prototype.handleClick = function (hex, $event) {
        this.onClick.emit({ hex: hex, $event: $event });
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
            template: "\n    <div\n      class=\"swatch\"\n      [ngStyle]=\"currentStyles()\"\n      [attr.title]=\"color\"\n      (click)=\"handleClick(color, $event)\"\n      (keydown.enter)=\"handleClick(color, $event)\"\n      (focus)=\"handleFocus()\"\n      (blur)=\"handleFocusOut()\"\n      (mouseover)=\"handleHover(color, $event)\"\n      tabindex=\"0\"\n    >\n      <ng-content></ng-content>\n      <color-checkboard\n        *ngIf=\"color === 'transparent'\"\n        boxShadow=\"inset 0 0 0 1px rgba(0,0,0,0.1)\"\n      ></color-checkboard>\n    </div>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], SwatchComponent);
    return SwatchComponent;
}());
export { SwatchComponent };
var SwatchModule = /** @class */ (function () {
    function SwatchModule() {
    }
    SwatchModule = tslib_1.__decorate([
        NgModule({
            declarations: [SwatchComponent],
            exports: [SwatchComponent],
            imports: [CommonModule, CheckboardModule],
        })
    ], SwatchModule);
    return SwatchModule;
}());
export { SwatchModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jb2xvci8iLCJzb3VyY2VzIjpbInN3YXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUF5QjFEO0lBdkJBO1FBeUJXLFVBQUssR0FBOEIsRUFBRSxDQUFDO1FBQ3RDLGVBQVUsR0FBOEIsRUFBRSxDQUFDO1FBRTFDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBa0MsQ0FBQztRQUM3RCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWtDLENBQUM7UUFDdkUsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDMUMsZ0JBQVcsR0FBOEIsRUFBRSxDQUFDO1FBQzVDLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFnQ2xCLENBQUM7SUE5QkMsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLHNCQUNaLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUN0QixNQUFNLEVBQUUsTUFBTSxFQUNkLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLFNBQVMsRUFDakIsUUFBUSxFQUFFLFVBQVUsRUFDcEIsT0FBTyxFQUFFLE1BQU0sSUFDWixJQUFJLENBQUMsS0FBSyxDQUNkLENBQUM7SUFDSixDQUFDO0lBQ0QsdUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLHdCQUNYLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FDbkIsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hFLENBQUM7SUFDRCx3Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELHFDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQ0QscUNBQVcsR0FBWCxVQUFZLEdBQUcsRUFBRSxNQUFNO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxxQ0FBVyxHQUFYLFVBQVksR0FBRyxFQUFFLE1BQU07UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQXZDUTtRQUFSLEtBQUssRUFBRTs7a0RBQU87SUFDTjtRQUFSLEtBQUssRUFBRTs7a0RBQXVDO0lBQ3RDO1FBQVIsS0FBSyxFQUFFOzt1REFBNEM7SUFDM0M7UUFBUixLQUFLLEVBQUU7O2tEQUFnQjtJQUNkO1FBQVQsTUFBTSxFQUFFOztvREFBOEQ7SUFDN0Q7UUFBVCxNQUFNLEVBQUU7O29EQUE4RDtJQU41RCxlQUFlO1FBdkIzQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsc2lCQWtCVDtZQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxlQUFlLENBeUMzQjtJQUFELHNCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F6Q1ksZUFBZTtBQWdENUI7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQUx4QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO1lBQzFCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztTQUMxQyxDQUFDO09BQ1csWUFBWSxDQUFHO0lBQUQsbUJBQUM7Q0FBQSxBQUE1QixJQUE0QjtTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENoZWNrYm9hcmRNb2R1bGUgfSBmcm9tICcuL2NoZWNrYm9hcmQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3Itc3dhdGNoJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cInN3YXRjaFwiXHJcbiAgICAgIFtuZ1N0eWxlXT1cImN1cnJlbnRTdHlsZXMoKVwiXHJcbiAgICAgIFthdHRyLnRpdGxlXT1cImNvbG9yXCJcclxuICAgICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKGNvbG9yLCAkZXZlbnQpXCJcclxuICAgICAgKGtleWRvd24uZW50ZXIpPVwiaGFuZGxlQ2xpY2soY29sb3IsICRldmVudClcIlxyXG4gICAgICAoZm9jdXMpPVwiaGFuZGxlRm9jdXMoKVwiXHJcbiAgICAgIChibHVyKT1cImhhbmRsZUZvY3VzT3V0KClcIlxyXG4gICAgICAobW91c2VvdmVyKT1cImhhbmRsZUhvdmVyKGNvbG9yLCAkZXZlbnQpXCJcclxuICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8Y29sb3ItY2hlY2tib2FyZFxyXG4gICAgICAgICpuZ0lmPVwiY29sb3IgPT09ICd0cmFuc3BhcmVudCdcIlxyXG4gICAgICAgIGJveFNoYWRvdz1cImluc2V0IDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMSlcIlxyXG4gICAgICA+PC9jb2xvci1jaGVja2JvYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN3YXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY29sb3I7XHJcbiAgQElucHV0KCkgc3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBASW5wdXQoKSBmb2N1c1N0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgQElucHV0KCkgZm9jdXM6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaGV4OiBzdHJpbmc7ICRldmVudDogRXZlbnQgfT4oKTtcclxuICBAT3V0cHV0KCkgb25Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8eyBoZXg6IHN0cmluZzsgJGV2ZW50OiBFdmVudCB9PigpO1xyXG4gIGRpdlN0eWxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gIGZvY3VzU3R5bGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgaW5Gb2N1cyA9IGZhbHNlO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZGl2U3R5bGVzID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmNvbG9yLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgIC4uLnRoaXMuc3R5bGUsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjdXJyZW50U3R5bGVzKCkge1xyXG4gICAgdGhpcy5mb2N1c1N0eWxlcyA9IHtcclxuICAgICAgLi4udGhpcy5kaXZTdHlsZXMsXHJcbiAgICAgIC4uLnRoaXMuZm9jdXNTdHlsZSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5mb2N1cyB8fCB0aGlzLmluRm9jdXMgPyB0aGlzLmZvY3VzU3R5bGVzIDogdGhpcy5kaXZTdHlsZXM7XHJcbiAgfVxyXG4gIGhhbmRsZUZvY3VzT3V0KCkge1xyXG4gICAgdGhpcy5pbkZvY3VzID0gZmFsc2U7XHJcbiAgfVxyXG4gIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgdGhpcy5pbkZvY3VzID0gdHJ1ZTtcclxuICB9XHJcbiAgaGFuZGxlSG92ZXIoaGV4LCAkZXZlbnQpIHtcclxuICAgIHRoaXMub25Ib3Zlci5lbWl0KHsgaGV4LCAkZXZlbnQgfSk7XHJcbiAgfVxyXG4gIGhhbmRsZUNsaWNrKGhleCwgJGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uQ2xpY2suZW1pdCh7IGhleCwgJGV2ZW50IH0pO1xyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtTd2F0Y2hDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTd2F0Y2hDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENoZWNrYm9hcmRNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3dhdGNoTW9kdWxlIHt9XHJcbiJdfQ==