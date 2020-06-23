import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { simpleCheckForValidColor, toState } from './helpers/color';
var ColorWrap = /** @class */ (function () {
    function ColorWrap() {
        this.className = '';
        this.color = {
            h: 250,
            s: 0.5,
            l: 0.2,
            a: 1,
        };
        this.onChange = new EventEmitter();
        this.onChangeComplete = new EventEmitter();
        this.onSwatchHover = new EventEmitter();
    }
    ColorWrap.prototype.ngOnInit = function () {
        var _this = this;
        this.changes = this.onChange
            .pipe(debounceTime(100))
            .subscribe(function (x) { return _this.onChangeComplete.emit(x); });
        this.setState(toState(this.color, 0));
        this.currentColor = this.hex;
    };
    ColorWrap.prototype.ngOnChanges = function () {
        this.setState(toState(this.color, this.oldHue));
    };
    ColorWrap.prototype.ngOnDestroy = function () {
        this.changes.unsubscribe();
    };
    ColorWrap.prototype.setState = function (data) {
        this.oldHue = data.oldHue;
        this.hsl = data.hsl;
        this.hsv = data.hsv;
        this.rgb = data.rgb;
        this.hex = data.hex;
        this.source = data.source;
        this.afterValidChange();
    };
    ColorWrap.prototype.handleChange = function (data, $event) {
        var isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            var color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onChange.emit({ color: color, $event: $event });
            this.afterValidChange();
        }
    };
    /** hook for components after a complete change */
    ColorWrap.prototype.afterValidChange = function () { };
    ColorWrap.prototype.handleSwatchHover = function (data, $event) {
        var isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            var color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onSwatchHover.emit({ color: color, $event: $event });
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ColorWrap.prototype, "className", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ColorWrap.prototype, "color", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ColorWrap.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ColorWrap.prototype, "onChangeComplete", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ColorWrap.prototype, "onSwatchHover", void 0);
    ColorWrap = tslib_1.__decorate([
        Component({
            // create seletor base for test override property
            selector: 'color-wrap',
            template: ""
        })
    ], ColorWrap);
    return ColorWrap;
}());
export { ColorWrap };
var ColorWrapModule = /** @class */ (function () {
    function ColorWrapModule() {
    }
    ColorWrapModule = tslib_1.__decorate([
        NgModule({
            declarations: [ColorWrap],
            exports: [ColorWrap],
            imports: [CommonModule],
        })
    ], ColorWrapModule);
    return ColorWrapModule;
}());
export { ColorWrapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itd3JhcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29sb3IvIiwic291cmNlcyI6WyJjb2xvci13cmFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBSVIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFhcEU7SUFMQTtRQU1XLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixVQUFLLEdBQWdDO1lBQzVDLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxDQUFDO1NBQ0wsQ0FBQztRQUNRLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzFDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDbEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBb0QzRCxDQUFDO0lBMUNDLDRCQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QixTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMs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LEFBQS9CLElBQStCO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHNpbXBsZUNoZWNrRm9yVmFsaWRDb2xvciwgdG9TdGF0ZSB9IGZyb20gJy4vaGVscGVycy9jb2xvcic7XHJcbmltcG9ydCB7IENvbG9yLCBIU0xBLCBIU1ZBLCBSR0JBIH0gZnJvbSAnLi9oZWxwZXJzL2NvbG9yLmludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvckV2ZW50IHtcclxuICAkZXZlbnQ6IEV2ZW50O1xyXG4gIGNvbG9yOiBDb2xvcjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gY3JlYXRlIHNlbGV0b3IgYmFzZSBmb3IgdGVzdCBvdmVycmlkZSBwcm9wZXJ0eVxyXG4gIHNlbGVjdG9yOiAnY29sb3Itd3JhcCcsXHJcbiAgdGVtcGxhdGU6IGBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JXcmFwIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgY29sb3I6IEhTTEEgfCBIU1ZBIHwgUkdCQSB8IHN0cmluZyA9IHtcclxuICAgIGg6IDI1MCxcclxuICAgIHM6IDAuNSxcclxuICAgIGw6IDAuMixcclxuICAgIGE6IDEsXHJcbiAgfTtcclxuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbG9yRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlQ29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPENvbG9yRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIG9uU3dhdGNoSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENvbG9yRXZlbnQ+KCk7XHJcbiAgb2xkSHVlOiBudW1iZXI7XHJcbiAgaHNsOiBIU0xBO1xyXG4gIGhzdjogSFNWQTtcclxuICByZ2I6IFJHQkE7XHJcbiAgaGV4OiBzdHJpbmc7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgY3VycmVudENvbG9yOiBzdHJpbmc7XHJcbiAgY2hhbmdlczogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2hhbmdlcyA9IHRoaXMub25DaGFuZ2VcclxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLm9uQ2hhbmdlQ29tcGxldGUuZW1pdCh4KSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHRvU3RhdGUodGhpcy5jb2xvciwgMCkpO1xyXG4gICAgdGhpcy5jdXJyZW50Q29sb3IgPSB0aGlzLmhleDtcclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHRvU3RhdGUodGhpcy5jb2xvciwgdGhpcy5vbGRIdWUpKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbiAgc2V0U3RhdGUoZGF0YSkge1xyXG4gICAgdGhpcy5vbGRIdWUgPSBkYXRhLm9sZEh1ZTtcclxuICAgIHRoaXMuaHNsID0gZGF0YS5oc2w7XHJcbiAgICB0aGlzLmhzdiA9IGRhdGEuaHN2O1xyXG4gICAgdGhpcy5yZ2IgPSBkYXRhLnJnYjtcclxuICAgIHRoaXMuaGV4ID0gZGF0YS5oZXg7XHJcbiAgICB0aGlzLnNvdXJjZSA9IGRhdGEuc291cmNlO1xyXG4gICAgdGhpcy5hZnRlclZhbGlkQ2hhbmdlKCk7XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZShkYXRhLCAkZXZlbnQpIHtcclxuICAgIGNvbnN0IGlzVmFsaWRDb2xvciA9IHNpbXBsZUNoZWNrRm9yVmFsaWRDb2xvcihkYXRhKTtcclxuICAgIGlmIChpc1ZhbGlkQ29sb3IpIHtcclxuICAgICAgY29uc3QgY29sb3IgPSB0b1N0YXRlKGRhdGEsIGRhdGEuaCB8fCB0aGlzLm9sZEh1ZSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoY29sb3IpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBjb2xvciwgJGV2ZW50IH0pO1xyXG4gICAgICB0aGlzLmFmdGVyVmFsaWRDaGFuZ2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqIGhvb2sgZm9yIGNvbXBvbmVudHMgYWZ0ZXIgYSBjb21wbGV0ZSBjaGFuZ2UgKi9cclxuICBhZnRlclZhbGlkQ2hhbmdlKCkge31cclxuXHJcbiAgaGFuZGxlU3dhdGNoSG92ZXIoZGF0YSwgJGV2ZW50KSB7XHJcbiAgICBjb25zdCBpc1ZhbGlkQ29sb3IgPSBzaW1wbGVDaGVja0ZvclZhbGlkQ29sb3IoZGF0YSk7XHJcbiAgICBpZiAoaXNWYWxpZENvbG9yKSB7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdG9TdGF0ZShkYXRhLCBkYXRhLmggfHwgdGhpcy5vbGRIdWUpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKGNvbG9yKTtcclxuICAgICAgdGhpcy5vblN3YXRjaEhvdmVyLmVtaXQoeyBjb2xvciwgJGV2ZW50IH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDb2xvcldyYXBdLFxyXG4gIGV4cG9ydHM6IFtDb2xvcldyYXBdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JXcmFwTW9kdWxlIHt9XHJcbiJdfQ==