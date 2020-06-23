import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { getCheckerboard } from './helpers/checkboard';
let CheckboardComponent = class CheckboardComponent {
    constructor() {
        this.white = 'transparent';
        this.size = 8;
        this.grey = 'rgba(0,0,0,.08)';
    }
    ngOnInit() {
        const background = getCheckerboard(this.white, this.grey, this.size);
        this.gridStyles = {
            borderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            background: `url(${background}) center left`,
        };
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], CheckboardComponent.prototype, "white", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], CheckboardComponent.prototype, "size", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], CheckboardComponent.prototype, "grey", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CheckboardComponent.prototype, "boxShadow", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CheckboardComponent.prototype, "borderRadius", void 0);
CheckboardComponent = tslib_1.__decorate([
    Component({
        selector: 'color-checkboard',
        template: `<div class="grid" [ngStyle]="gridStyles"></div>`,
        preserveWhitespaces: false,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [`
  .grid {
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    position: absolute;
  }
  `]
    })
], CheckboardComponent);
export { CheckboardComponent };
let CheckboardModule = class CheckboardModule {
};
CheckboardModule = tslib_1.__decorate([
    NgModule({
        declarations: [CheckboardComponent],
        exports: [CheckboardComponent],
        imports: [CommonModule],
    })
], CheckboardModule);
export { CheckboardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29sb3IvIiwic291cmNlcyI6WyJjaGVja2JvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBbUJ2RCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQWpCaEM7UUFrQlcsVUFBSyxHQUFHLGFBQWEsQ0FBQztRQUN0QixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBYXBDLENBQUM7SUFSQyxRQUFRO1FBQ04sTUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFVBQVUsRUFBRSxPQUFPLFVBQVUsZUFBZTtTQUM3QyxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFmVTtJQUFSLEtBQUssRUFBRTs7a0RBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFOztpREFBVTtBQUNUO0lBQVIsS0FBSyxFQUFFOztpREFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7O3NEQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTs7eURBQXNCO0FBTG5CLG1CQUFtQjtJQWpCL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsaURBQWlEO1FBWTNELG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBWDdDOzs7Ozs7OztHQVFEO0tBSUYsQ0FBQztHQUNXLG1CQUFtQixDQWdCL0I7U0FoQlksbUJBQW1CO0FBdUJoQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFHLENBQUE7QUFBbkIsZ0JBQWdCO0lBTDVCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzlCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1csZ0JBQWdCLENBQUc7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT25Jbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZ2V0Q2hlY2tlcmJvYXJkIH0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrYm9hcmQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1jaGVja2JvYXJkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJncmlkXCIgW25nU3R5bGVdPVwiZ3JpZFN0eWxlc1wiPjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgLmdyaWQge1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIGAsXHJcbiAgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHdoaXRlID0gJ3RyYW5zcGFyZW50JztcclxuICBASW5wdXQoKSBzaXplID0gODtcclxuICBASW5wdXQoKSBncmV5ID0gJ3JnYmEoMCwwLDAsLjA4KSc7XHJcbiAgQElucHV0KCkgYm94U2hhZG93OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYm9yZGVyUmFkaXVzOiBzdHJpbmc7XHJcbiAgZ3JpZFN0eWxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZ2V0Q2hlY2tlcmJvYXJkKHRoaXMud2hpdGUsIHRoaXMuZ3JleSwgdGhpcy5zaXplKTtcclxuICAgIHRoaXMuZ3JpZFN0eWxlcyA9IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlclJhZGl1cyxcclxuICAgICAgYm94U2hhZG93OiB0aGlzLmJveFNoYWRvdyxcclxuICAgICAgYmFja2dyb3VuZDogYHVybCgke2JhY2tncm91bmR9KSBjZW50ZXIgbGVmdGAsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDaGVja2JvYXJkQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQ2hlY2tib2FyZENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JvYXJkTW9kdWxlIHt9XHJcbiJdfQ==