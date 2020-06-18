import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { fromEvent } from 'rxjs';
let EditableInputComponent = class EditableInputComponent {
    constructor() {
        this.placeholder = '';
        this.onChange = new EventEmitter();
        this.focus = false;
    }
    ngOnInit() {
        this.wrapStyle = this.style && this.style.wrap ? this.style.wrap : {};
        this.inputStyle = this.style && this.style.input ? this.style.input : {};
        this.labelStyle = this.style && this.style.label ? this.style.label : {};
        if (this.dragLabel) {
            this.labelStyle.cursor = 'ew-resize';
        }
    }
    handleFocus($event) {
        this.focus = true;
    }
    handleFocusOut($event) {
        this.focus = false;
        this.currentValue = this.blurValue;
    }
    handleKeydown($event) {
        // In case `e.target.value` is a percentage remove the `%` character
        // and update accordingly with a percentage
        // https://github.com/casesandberg/react-color/issues/383
        const stringValue = String($event.target.value);
        const isPercentage = stringValue.indexOf('%') > -1;
        const num = Number(stringValue.replace(/%/g, ''));
        if (!isNaN(num)) {
            const amount = this.arrowOffset || 1;
            // Up
            if ($event.keyCode === 38) {
                if (this.label) {
                    this.onChange.emit({
                        data: { [this.label]: num + amount },
                        $event,
                    });
                }
                else {
                    this.onChange.emit({ data: num + amount, $event });
                }
                if (isPercentage) {
                    this.currentValue = `${num + amount}%`;
                }
                else {
                    this.currentValue = num + amount;
                }
            }
            // Down
            if ($event.keyCode === 40) {
                if (this.label) {
                    this.onChange.emit({
                        data: { [this.label]: num - amount },
                        $event,
                    });
                }
                else {
                    this.onChange.emit({ data: num - amount, $event });
                }
                if (isPercentage) {
                    this.currentValue = `${num - amount}%`;
                }
                else {
                    this.currentValue = num - amount;
                }
            }
        }
    }
    handleKeyup($event) {
        if ($event.keyCode === 40 || $event.keyCode === 38) {
            return;
        }
        if (this.label) {
            this.onChange.emit({
                data: { [this.label]: $event.target.value },
                $event,
            });
        }
        else {
            this.onChange.emit({ data: $event.target.value, $event });
        }
    }
    ngOnChanges() {
        if (!this.focus) {
            this.currentValue = String(this.value).toUpperCase();
            this.blurValue = String(this.value).toUpperCase();
        }
        else {
            this.blurValue = String(this.value).toUpperCase();
        }
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    subscribe() {
        this.mousemove = fromEvent(document, 'mousemove').subscribe((ev) => this.handleDrag(ev));
        this.mouseup = fromEvent(document, 'mouseup').subscribe(() => this.unsubscribe());
    }
    unsubscribe() {
        if (this.mousemove) {
            this.mousemove.unsubscribe();
        }
        if (this.mouseup) {
            this.mouseup.unsubscribe();
        }
    }
    handleMousedown($event) {
        if (this.dragLabel) {
            $event.preventDefault();
            this.handleDrag($event);
            this.subscribe();
        }
    }
    handleDrag($event) {
        if (this.dragLabel) {
            const newValue = Math.round(this.value + $event.movementX);
            if (newValue >= 0 && newValue <= this.dragMax) {
                this.onChange.emit({ data: { [this.label]: newValue }, $event });
            }
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
        template: `
  <div class="wrap" [ngStyle]="wrapStyle">
    <input [ngStyle]="inputStyle" spellCheck="false"
      [value]="currentValue" [placeholder]="placeholder"
      (keydown)="handleKeydown($event)" (keyup)="handleKeyup($event)"
      (focus)="handleFocus($event)" (focusout)="handleFocusOut($event)" />
    <span *ngIf="label" [ngStyle]="labelStyle" (mousedown)="handleMousedown($event)">
      {{ label }}
    </span>
  </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [`
    :host {
      display: flex;
    }
    .wrap {
      position: relative;
    }
  `]
    })
], EditableInputComponent);
export { EditableInputComponent };
let EditableInputModule = class EditableInputModule {
};
EditableInputModule = tslib_1.__decorate([
    NgModule({
        declarations: [EditableInputComponent],
        exports: [EditableInputComponent],
        imports: [CommonModule],
    })
], EditableInputModule);
export { EditableInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNvbG9yLyIsInNvdXJjZXMiOlsiZWRpdGFibGUtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBSVIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBMkIvQyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQXpCbkM7UUFvQ1csZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFNeEMsVUFBSyxHQUFHLEtBQUssQ0FBQztJQXlIaEIsQ0FBQztJQXJIQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekUsSUFBSSxJ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c0I7UUFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7O0dBVVQ7UUFXRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFUN0M7Ozs7Ozs7R0FPRDtLQUdGLENBQUM7R0FDVyxzQkFBc0IsQ0EySWxDO1NBM0lZLHNCQUFzQjtBQWtKbkMsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FBRyxDQUFBO0FBQXRCLG1CQUFtQjtJQUwvQixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztRQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztRQUNqQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLG1CQUFtQixDQUFHO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1lZGl0YWJsZS1pbnB1dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwid3JhcFwiIFtuZ1N0eWxlXT1cIndyYXBTdHlsZVwiPlxyXG4gICAgPGlucHV0IFtuZ1N0eWxlXT1cImlucHV0U3R5bGVcIiBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICBbdmFsdWVdPVwiY3VycmVudFZhbHVlXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgKGtleWRvd24pPVwiaGFuZGxlS2V5ZG93bigkZXZlbnQpXCIgKGtleXVwKT1cImhhbmRsZUtleXVwKCRldmVudClcIlxyXG4gICAgICAoZm9jdXMpPVwiaGFuZGxlRm9jdXMoJGV2ZW50KVwiIChmb2N1c291dCk9XCJoYW5kbGVGb2N1c091dCgkZXZlbnQpXCIgLz5cclxuICAgIDxzcGFuICpuZ0lmPVwibGFiZWxcIiBbbmdTdHlsZV09XCJsYWJlbFN0eWxlXCIgKG1vdXNlZG93bik9XCJoYW5kbGVNb3VzZWRvd24oJGV2ZW50KVwiPlxyXG4gICAgICB7eyBsYWJlbCB9fVxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICA6aG9zdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAud3JhcCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICBgLFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0YWJsZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgc3R5bGU6IHtcclxuICAgIHdyYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICBpbnB1dDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIGxhYmVsOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIH07XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGFycm93T2Zmc2V0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgZHJhZ0xhYmVsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRyYWdNYXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBibHVyVmFsdWU6IHN0cmluZztcclxuICB3cmFwU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgaW5wdXRTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBsYWJlbFN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIGZvY3VzID0gZmFsc2U7XHJcbiAgbW91c2Vtb3ZlOiBTdWJzY3JpcHRpb247XHJcbiAgbW91c2V1cDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMud3JhcFN0eWxlID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLndyYXAgPyB0aGlzLnN0eWxlLndyYXAgOiB7fTtcclxuICAgIHRoaXMuaW5wdXRTdHlsZSA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5pbnB1dCA/IHRoaXMuc3R5bGUuaW5wdXQgOiB7fTtcclxuICAgIHRoaXMubGFiZWxTdHlsZSA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5sYWJlbCA/IHRoaXMuc3R5bGUubGFiZWwgOiB7fTtcclxuICAgIGlmICh0aGlzLmRyYWdMYWJlbCkge1xyXG4gICAgICB0aGlzLmxhYmVsU3R5bGUuY3Vyc29yID0gJ2V3LXJlc2l6ZSc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUZvY3VzKCRldmVudCkge1xyXG4gICAgdGhpcy5mb2N1cyA9IHRydWU7XHJcbiAgfVxyXG4gIGhhbmRsZUZvY3VzT3V0KCRldmVudCkge1xyXG4gICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmJsdXJWYWx1ZTtcclxuICB9XHJcbiAgaGFuZGxlS2V5ZG93bigkZXZlbnQpIHtcclxuICAgIC8vIEluIGNhc2UgYGUudGFyZ2V0LnZhbHVlYCBpcyBhIHBlcmNlbnRhZ2UgcmVtb3ZlIHRoZSBgJWAgY2hhcmFjdGVyXHJcbiAgICAvLyBhbmQgdXBkYXRlIGFjY29yZGluZ2x5IHdpdGggYSBwZXJjZW50YWdlXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vY2FzZXNhbmRiZXJnL3JlYWN0LWNvbG9yL2lzc3Vlcy8zODNcclxuICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gU3RyaW5nKCRldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgaXNQZXJjZW50YWdlID0gc3RyaW5nVmFsdWUuaW5kZXhPZignJScpID4gLTE7XHJcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3RyaW5nVmFsdWUucmVwbGFjZSgvJS9nLCAnJykpO1xyXG4gICAgaWYgKCFpc05hTihudW0pKSB7XHJcbiAgICAgIGNvbnN0IGFtb3VudCA9IHRoaXMuYXJyb3dPZmZzZXQgfHwgMTtcclxuXHJcbiAgICAgIC8vIFVwXHJcbiAgICAgIGlmICgkZXZlbnQua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgZGF0YTogeyBbdGhpcy5sYWJlbF06IG51bSArIGFtb3VudCB9LFxyXG4gICAgICAgICAgICAkZXZlbnQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgZGF0YTogbnVtICsgYW1vdW50LCAkZXZlbnQgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNQZXJjZW50YWdlKSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IGAke251bSArIGFtb3VudH0lYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBudW0gKyBhbW91bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBEb3duXHJcbiAgICAgIGlmICgkZXZlbnQua2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgZGF0YTogeyBbdGhpcy5sYWJlbF06IG51bSAtIGFtb3VudCB9LFxyXG4gICAgICAgICAgICAkZXZlbnQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgZGF0YTogbnVtIC0gYW1vdW50LCAkZXZlbnQgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNQZXJjZW50YWdlKSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IGAke251bSAtIGFtb3VudH0lYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBudW0gLSBhbW91bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUtleXVwKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudC5rZXlDb2RlID09PSA0MCB8fCAkZXZlbnQua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICBkYXRhOiB7IFt0aGlzLmxhYmVsXTogJGV2ZW50LnRhcmdldC52YWx1ZSB9LFxyXG4gICAgICAgICRldmVudCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhOiAkZXZlbnQudGFyZ2V0LnZhbHVlLCAkZXZlbnQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKCF0aGlzLmZvY3VzKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gU3RyaW5nKHRoaXMudmFsdWUpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIHRoaXMuYmx1clZhbHVlID0gU3RyaW5nKHRoaXMudmFsdWUpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJsdXJWYWx1ZSA9IFN0cmluZyh0aGlzLnZhbHVlKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbiAgc3Vic2NyaWJlKCkge1xyXG4gICAgdGhpcy5tb3VzZW1vdmUgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZW1vdmUnKS5zdWJzY3JpYmUoKGV2OiBFdmVudCkgPT5cclxuICAgICAgdGhpcy5oYW5kbGVEcmFnKGV2KSxcclxuICAgICk7XHJcbiAgICB0aGlzLm1vdXNldXAgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZXVwJykuc3Vic2NyaWJlKCgpID0+XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKSxcclxuICAgICk7XHJcbiAgfVxyXG4gIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgaWYgKHRoaXMubW91c2Vtb3ZlKSB7XHJcbiAgICAgIHRoaXMubW91c2Vtb3ZlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tb3VzZXVwKSB7XHJcbiAgICAgIHRoaXMubW91c2V1cC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVNb3VzZWRvd24oJGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ0xhYmVsKSB7XHJcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmhhbmRsZURyYWcoJGV2ZW50KTtcclxuICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlRHJhZygkZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmRyYWdMYWJlbCkge1xyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IE1hdGgucm91bmQodGhpcy52YWx1ZSArICRldmVudC5tb3ZlbWVudFgpO1xyXG4gICAgICBpZiAobmV3VmFsdWUgPj0gMCAmJiBuZXdWYWx1ZSA8PSB0aGlzLmRyYWdNYXgpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhOiB7IFt0aGlzLmxhYmVsXTogbmV3VmFsdWUgfSwgJGV2ZW50IH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0VkaXRhYmxlSW5wdXRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtFZGl0YWJsZUlucHV0Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRhYmxlSW5wdXRNb2R1bGUge31cclxuIl19