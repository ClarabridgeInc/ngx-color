import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { fromEvent } from 'rxjs';
var EditableInputComponent = /** @class */ (function () {
    function EditableInputComponent() {
        this.placeholder = '';
        this.onChange = new EventEmitter();
        this.focus = false;
    }
    EditableInputComponent.prototype.ngOnInit = function () {
        this.wrapStyle = this.style && this.style.wrap ? this.style.wrap : {};
        this.inputStyle = this.style && this.style.input ? this.style.input : {};
        this.labelStyle = this.style && this.style.label ? this.style.label : {};
        if (this.dragLabel) {
            this.labelStyle.cursor = 'ew-resize';
        }
    };
    EditableInputComponent.prototype.handleFocus = function ($event) {
        this.focus = true;
    };
    EditableInputComponent.prototype.handleFocusOut = function ($event) {
        this.focus = false;
        this.currentValue = this.blurValue;
    };
    EditableInputComponent.prototype.handleKeydown = function ($event) {
        var _a, _b;
        // In case `e.target.value` is a percentage remove the `%` character
        // and update accordingly with a percentage
        // https://github.com/casesandberg/react-color/issues/383
        var stringValue = String($event.target.value);
        var isPercentage = stringValue.indexOf('%') > -1;
        var num = Number(stringValue.replace(/%/g, ''));
        if (!isNaN(num)) {
            var amount = this.arrowOffset || 1;
            // Up
            if ($event.keyCode === 38) {
                if (this.label) {
                    this.onChange.emit({
                        data: (_a = {}, _a[this.label] = num + amount, _a),
                        $event: $event,
                    });
                }
                else {
                    this.onChange.emit({ data: num + amount, $event: $event });
                }
                if (isPercentage) {
                    this.currentValue = num + amount + "%";
                }
                else {
                    this.currentValue = num + amount;
                }
            }
            // Down
            if ($event.keyCode === 40) {
                if (this.label) {
                    this.onChange.emit({
                        data: (_b = {}, _b[this.label] = num - amount, _b),
                        $event: $event,
                    });
                }
                else {
                    this.onChange.emit({ data: num - amount, $event: $event });
                }
                if (isPercentage) {
                    this.currentValue = num - amount + "%";
                }
                else {
                    this.currentValue = num - amount;
                }
            }
        }
    };
    EditableInputComponent.prototype.handleKeyup = function ($event) {
        var _a;
        if ($event.keyCode === 40 || $event.keyCode === 38) {
            return;
        }
        if (this.label) {
            this.onChange.emit({
                data: (_a = {}, _a[this.label] = $event.target.value, _a),
                $event: $event,
            });
        }
        else {
            this.onChange.emit({ data: $event.target.value, $event: $event });
        }
    };
    EditableInputComponent.prototype.ngOnChanges = function () {
        if (!this.focus) {
            this.currentValue = String(this.value).toUpperCase();
            this.blurValue = String(this.value).toUpperCase();
        }
        else {
            this.blurValue = String(this.value).toUpperCase();
        }
    };
    EditableInputComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    EditableInputComponent.prototype.subscribe = function () {
        var _this = this;
        this.mousemove = fromEvent(document, 'mousemove').subscribe(function (ev) {
            return _this.handleDrag(ev);
        });
        this.mouseup = fromEvent(document, 'mouseup').subscribe(function () {
            return _this.unsubscribe();
        });
    };
    EditableInputComponent.prototype.unsubscribe = function () {
        if (this.mousemove) {
            this.mousemove.unsubscribe();
        }
        if (this.mouseup) {
            this.mouseup.unsubscribe();
        }
    };
    EditableInputComponent.prototype.handleMousedown = function ($event) {
        if (this.dragLabel) {
            $event.preventDefault();
            this.handleDrag($event);
            this.subscribe();
        }
    };
    EditableInputComponent.prototype.handleDrag = function ($event) {
        var _a;
        if (this.dragLabel) {
            var newValue = Math.round(this.value + $event.movementX);
            if (newValue >= 0 && newValue <= this.dragMax) {
                this.onChange.emit({ data: (_a = {}, _a[this.label] = newValue, _a), $event: $event });
            }
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], EditableInputComponent.prototype, "style", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], EditableInputComponent.prototype, "label", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], EditableInputComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], EditableInputComponent.prototype, "arrowOffset", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], EditableInputComponent.prototype, "dragLabel", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], EditableInputComponent.prototype, "dragMax", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], EditableInputComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], EditableInputComponent.prototype, "onChange", void 0);
    EditableInputComponent = tslib_1.__decorate([
        Component({
            selector: 'color-editable-input',
            template: "\n  <div class=\"wrap\" [ngStyle]=\"wrapStyle\">\n    <input [ngStyle]=\"inputStyle\" spellCheck=\"false\"\n      [value]=\"currentValue\" [placeholder]=\"placeholder\"\n      (keydown)=\"handleKeydown($event)\" (keyup)=\"handleKeyup($event)\"\n      (focus)=\"handleFocus($event)\" (focusout)=\"handleFocusOut($event)\" />\n    <span *ngIf=\"label\" [ngStyle]=\"labelStyle\" (mousedown)=\"handleMousedown($event)\">\n      {{ label }}\n    </span>\n  </div>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["\n    :host {\n      display: flex;\n    }\n    .wrap {\n      position: relative;\n    }\n  "]
        })
    ], EditableInputComponent);
    return EditableInputComponent;
}());
export { EditableInputComponent };
var EditableInputModule = /** @class */ (function () {
    function EditableInputModule() {
    }
    EditableInputModule = tslib_1.__decorate([
        NgModule({
            declarations: [EditableInputComponent],
            exports: [EditableInputComponent],
            imports: [CommonModule],
        })
    ], EditableInputModule);
    return EditableInputModule;
}());
export { EditableInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNvbG9yLyIsInNvdXJjZXMiOlsiZWRpdGFibGUtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBSVIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBMkIvQztJQXpCQTtRQW9DVyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU14QyxVQUFLLEdBQUcsS0FBSyxDQUFDO0lBeUhoQixDQUFDO0lBckhDLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIs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c0I7UUF6QmxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLGdkQVVUO1lBV0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07cUJBVDdDLCtGQU9EO1NBR0YsQ0FBQztPQUNXLHNCQUFzQixDQTJJbEM7SUFBRCw2QkFBQztDQUFBLEFBM0lELElBMklDO1NBM0lZLHNCQUFzQjtBQWtKbkM7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLG1CQUFtQjtRQUwvQixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNqQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDeEIsQ0FBQztPQUNXLG1CQUFtQixDQUFHO0lBQUQsMEJBQUM7Q0FBQSxBQUFuQyxJQUFtQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3ItZWRpdGFibGUtaW5wdXQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cIndyYXBcIiBbbmdTdHlsZV09XCJ3cmFwU3R5bGVcIj5cclxuICAgIDxpbnB1dCBbbmdTdHlsZV09XCJpbnB1dFN0eWxlXCIgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgW3ZhbHVlXT1cImN1cnJlbnRWYWx1ZVwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgIChrZXlkb3duKT1cImhhbmRsZUtleWRvd24oJGV2ZW50KVwiIChrZXl1cCk9XCJoYW5kbGVLZXl1cCgkZXZlbnQpXCJcclxuICAgICAgKGZvY3VzKT1cImhhbmRsZUZvY3VzKCRldmVudClcIiAoZm9jdXNvdXQpPVwiaGFuZGxlRm9jdXNPdXQoJGV2ZW50KVwiIC8+XHJcbiAgICA8c3BhbiAqbmdJZj1cImxhYmVsXCIgW25nU3R5bGVdPVwibGFiZWxTdHlsZVwiIChtb3VzZWRvd24pPVwiaGFuZGxlTW91c2Vkb3duKCRldmVudClcIj5cclxuICAgICAge3sgbGFiZWwgfX1cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgOmhvc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLndyYXAge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdGFibGVJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHN0eWxlOiB7XHJcbiAgICB3cmFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gICAgaW5wdXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICBsYWJlbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICB9O1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKSBhcnJvd09mZnNldDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRyYWdMYWJlbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkcmFnTWF4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgY3VycmVudFZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgYmx1clZhbHVlOiBzdHJpbmc7XHJcbiAgd3JhcFN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIGlucHV0U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgbGFiZWxTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBmb2N1cyA9IGZhbHNlO1xyXG4gIG1vdXNlbW92ZTogU3Vic2NyaXB0aW9uO1xyXG4gIG1vdXNldXA6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLndyYXBTdHlsZSA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS53cmFwID8gdGhpcy5zdHlsZS53cmFwIDoge307XHJcbiAgICB0aGlzLmlucHV0U3R5bGUgPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuaW5wdXQgPyB0aGlzLnN0eWxlLmlucHV0IDoge307XHJcbiAgICB0aGlzLmxhYmVsU3R5bGUgPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUubGFiZWwgPyB0aGlzLnN0eWxlLmxhYmVsIDoge307XHJcbiAgICBpZiAodGhpcy5kcmFnTGFiZWwpIHtcclxuICAgICAgdGhpcy5sYWJlbFN0eWxlLmN1cnNvciA9ICdldy1yZXNpemUnO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVGb2N1cygkZXZlbnQpIHtcclxuICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xyXG4gIH1cclxuICBoYW5kbGVGb2N1c091dCgkZXZlbnQpIHtcclxuICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcclxuICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5ibHVyVmFsdWU7XHJcbiAgfVxyXG4gIGhhbmRsZUtleWRvd24oJGV2ZW50KSB7XHJcbiAgICAvLyBJbiBjYXNlIGBlLnRhcmdldC52YWx1ZWAgaXMgYSBwZXJjZW50YWdlIHJlbW92ZSB0aGUgYCVgIGNoYXJhY3RlclxyXG4gICAgLy8gYW5kIHVwZGF0ZSBhY2NvcmRpbmdseSB3aXRoIGEgcGVyY2VudGFnZVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Nhc2VzYW5kYmVyZy9yZWFjdC1jb2xvci9pc3N1ZXMvMzgzXHJcbiAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IFN0cmluZygkZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IGlzUGVyY2VudGFnZSA9IHN0cmluZ1ZhbHVlLmluZGV4T2YoJyUnKSA+IC0xO1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHN0cmluZ1ZhbHVlLnJlcGxhY2UoLyUvZywgJycpKTtcclxuICAgIGlmICghaXNOYU4obnVtKSkge1xyXG4gICAgICBjb25zdCBhbW91bnQgPSB0aGlzLmFycm93T2Zmc2V0IHx8IDE7XHJcblxyXG4gICAgICAvLyBVcFxyXG4gICAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGRhdGE6IHsgW3RoaXMubGFiZWxdOiBudW0gKyBhbW91bnQgfSxcclxuICAgICAgICAgICAgJGV2ZW50LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IGRhdGE6IG51bSArIGFtb3VudCwgJGV2ZW50IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzUGVyY2VudGFnZSkge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBgJHtudW0gKyBhbW91bnR9JWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gbnVtICsgYW1vdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRG93blxyXG4gICAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGRhdGE6IHsgW3RoaXMubGFiZWxdOiBudW0gLSBhbW91bnQgfSxcclxuICAgICAgICAgICAgJGV2ZW50LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IGRhdGE6IG51bSAtIGFtb3VudCwgJGV2ZW50IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzUGVyY2VudGFnZSkge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBgJHtudW0gLSBhbW91bnR9JWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gbnVtIC0gYW1vdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVLZXl1cCgkZXZlbnQpIHtcclxuICAgIGlmICgkZXZlbnQua2V5Q29kZSA9PT0gNDAgfHwgJGV2ZW50LmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxhYmVsKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgZGF0YTogeyBbdGhpcy5sYWJlbF06ICRldmVudC50YXJnZXQudmFsdWUgfSxcclxuICAgICAgICAkZXZlbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgZGF0YTogJGV2ZW50LnRhcmdldC52YWx1ZSwgJGV2ZW50IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICghdGhpcy5mb2N1cykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IFN0cmluZyh0aGlzLnZhbHVlKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICB0aGlzLmJsdXJWYWx1ZSA9IFN0cmluZyh0aGlzLnZhbHVlKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ibHVyVmFsdWUgPSBTdHJpbmcodGhpcy52YWx1ZSkudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG4gIHN1YnNjcmliZSgpIHtcclxuICAgIHRoaXMubW91c2Vtb3ZlID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2Vtb3ZlJykuc3Vic2NyaWJlKChldjogRXZlbnQpID0+XHJcbiAgICAgIHRoaXMuaGFuZGxlRHJhZyhldiksXHJcbiAgICApO1xyXG4gICAgdGhpcy5tb3VzZXVwID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcpLnN1YnNjcmliZSgoKSA9PlxyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCksXHJcbiAgICApO1xyXG4gIH1cclxuICB1bnN1YnNjcmliZSgpIHtcclxuICAgIGlmICh0aGlzLm1vdXNlbW92ZSkge1xyXG4gICAgICB0aGlzLm1vdXNlbW92ZS51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubW91c2V1cCkge1xyXG4gICAgICB0aGlzLm1vdXNldXAudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlTW91c2Vkb3duKCRldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmRyYWdMYWJlbCkge1xyXG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5oYW5kbGVEcmFnKCRldmVudCk7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZURyYWcoJGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5kcmFnTGFiZWwpIHtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBNYXRoLnJvdW5kKHRoaXMudmFsdWUgKyAkZXZlbnQubW92ZW1lbnRYKTtcclxuICAgICAgaWYgKG5ld1ZhbHVlID49IDAgJiYgbmV3VmFsdWUgPD0gdGhpcy5kcmFnTWF4KSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgZGF0YTogeyBbdGhpcy5sYWJlbF06IG5ld1ZhbHVlIH0sICRldmVudCB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtFZGl0YWJsZUlucHV0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbRWRpdGFibGVJbnB1dENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0YWJsZUlucHV0TW9kdWxlIHt9XHJcbiJdfQ==