import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { simpleCheckForValidColor, toState } from './helpers/color';
let ColorWrap = class ColorWrap {
    constructor() {
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
    ngOnInit() {
        this.changes = this.onChange
            .pipe(debounceTime(100))
            .subscribe(x => this.onChangeComplete.emit(x));
        this.setState(toState(this.color, 0));
        this.currentColor = this.hex;
    }
    ngOnChanges() {
        this.setState(toState(this.color, this.oldHue));
    }
    ngOnDestroy() {
        this.changes.unsubscribe();
    }
    setState(data) {
        this.oldHue = data.oldHue;
        this.hsl = data.hsl;
        this.hsv = data.hsv;
        this.rgb = data.rgb;
        this.hex = data.hex;
        this.source = data.source;
        this.afterValidChange();
    }
    handleChange(data, $event) {
        const isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            const color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onChange.emit({ color, $event });
            this.afterValidChange();
        }
    }
    /** hook for components after a complete change */
    afterValidChange() { }
    handleSwatchHover(data, $event) {
        const isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            const color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onSwatchHover.emit({ color, $event });
        }
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
        template: ``
    })
], ColorWrap);
export { ColorWrap };
let ColorWrapModule = class ColorWrapModule {
};
ColorWrapModule = tslib_1.__decorate([
    NgModule({
        declarations: [ColorWrap],
        exports: [ColorWrap],
        imports: [CommonModule],
    })
], ColorWrapModule);
export { ColorWrapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itd3JhcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29sb3IvIiwic291cmNlcyI6WyJjb2xvci13cmFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBSVIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFhcEUsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztJQUx0QjtRQU1XLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixVQUFLLEdBQWdDO1lBQzVDLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxDQUFDO1NBQ0wsQ0FBQztRQUNRLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzFDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDbEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBb0QzRCxDQUFDO0lBMUNDLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENB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bW9uJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBzaW1wbGVDaGVja0ZvclZhbGlkQ29sb3IsIHRvU3RhdGUgfSBmcm9tICcuL2hlbHBlcnMvY29sb3InO1xyXG5pbXBvcnQgeyBDb2xvciwgSFNMQSwgSFNWQSwgUkdCQSB9IGZyb20gJy4vaGVscGVycy9jb2xvci5pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JFdmVudCB7XHJcbiAgJGV2ZW50OiBFdmVudDtcclxuICBjb2xvcjogQ29sb3I7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIGNyZWF0ZSBzZWxldG9yIGJhc2UgZm9yIHRlc3Qgb3ZlcnJpZGUgcHJvcGVydHlcclxuICBzZWxlY3RvcjogJ2NvbG9yLXdyYXAnLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yV3JhcCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIGNvbG9yOiBIU0xBIHwgSFNWQSB8IFJHQkEgfCBzdHJpbmcgPSB7XHJcbiAgICBoOiAyNTAsXHJcbiAgICBzOiAwLjUsXHJcbiAgICBsOiAwLjIsXHJcbiAgICBhOiAxLFxyXG4gIH07XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvckV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvckV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBvblN3YXRjaEhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvckV2ZW50PigpO1xyXG4gIG9sZEh1ZTogbnVtYmVyO1xyXG4gIGhzbDogSFNMQTtcclxuICBoc3Y6IEhTVkE7XHJcbiAgcmdiOiBSR0JBO1xyXG4gIGhleDogc3RyaW5nO1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIGN1cnJlbnRDb2xvcjogc3RyaW5nO1xyXG4gIGNoYW5nZXM6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNoYW5nZXMgPSB0aGlzLm9uQ2hhbmdlXHJcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxMDApKVxyXG4gICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5vbkNoYW5nZUNvbXBsZXRlLmVtaXQoeCkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh0b1N0YXRlKHRoaXMuY29sb3IsIDApKTtcclxuICAgIHRoaXMuY3VycmVudENvbG9yID0gdGhpcy5oZXg7XHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh0b1N0YXRlKHRoaXMuY29sb3IsIHRoaXMub2xkSHVlKSk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG4gIHNldFN0YXRlKGRhdGEpIHtcclxuICAgIHRoaXMub2xkSHVlID0gZGF0YS5vbGRIdWU7XHJcbiAgICB0aGlzLmhzbCA9IGRhdGEuaHNsO1xyXG4gICAgdGhpcy5oc3YgPSBkYXRhLmhzdjtcclxuICAgIHRoaXMucmdiID0gZGF0YS5yZ2I7XHJcbiAgICB0aGlzLmhleCA9IGRhdGEuaGV4O1xyXG4gICAgdGhpcy5zb3VyY2UgPSBkYXRhLnNvdXJjZTtcclxuICAgIHRoaXMuYWZ0ZXJWYWxpZENoYW5nZSgpO1xyXG4gIH1cclxuICBoYW5kbGVDaGFuZ2UoZGF0YSwgJGV2ZW50KSB7XHJcbiAgICBjb25zdCBpc1ZhbGlkQ29sb3IgPSBzaW1wbGVDaGVja0ZvclZhbGlkQ29sb3IoZGF0YSk7XHJcbiAgICBpZiAoaXNWYWxpZENvbG9yKSB7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdG9TdGF0ZShkYXRhLCBkYXRhLmggfHwgdGhpcy5vbGRIdWUpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKGNvbG9yKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgY29sb3IsICRldmVudCB9KTtcclxuICAgICAgdGhpcy5hZnRlclZhbGlkQ2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKiBob29rIGZvciBjb21wb25lbnRzIGFmdGVyIGEgY29tcGxldGUgY2hhbmdlICovXHJcbiAgYWZ0ZXJWYWxpZENoYW5nZSgpIHt9XHJcblxyXG4gIGhhbmRsZVN3YXRjaEhvdmVyKGRhdGEsICRldmVudCkge1xyXG4gICAgY29uc3QgaXNWYWxpZENvbG9yID0gc2ltcGxlQ2hlY2tGb3JWYWxpZENvbG9yKGRhdGEpO1xyXG4gICAgaWYgKGlzVmFsaWRDb2xvcikge1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRvU3RhdGUoZGF0YSwgZGF0YS5oIHx8IHRoaXMub2xkSHVlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShjb2xvcik7XHJcbiAgICAgIHRoaXMub25Td2F0Y2hIb3Zlci5lbWl0KHsgY29sb3IsICRldmVudCB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ29sb3JXcmFwXSxcclxuICBleHBvcnRzOiBbQ29sb3JXcmFwXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yV3JhcE1vZHVsZSB7fVxyXG4iXX0=