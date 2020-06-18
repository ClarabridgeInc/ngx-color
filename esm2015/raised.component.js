import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
let RaisedComponent = class RaisedComponent {
    constructor() {
        this.zDepth = 1;
        this.radius = 1;
        this.background = '#fff';
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], RaisedComponent.prototype, "zDepth", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], RaisedComponent.prototype, "radius", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], RaisedComponent.prototype, "background", void 0);
RaisedComponent = tslib_1.__decorate([
    Component({
        selector: 'color-raised',
        template: `
  <div class="raised-wrap">
    <div class="raised-bg zDepth-{{zDepth}}" [style.background]="background"></div>
    <div class="raised-content">
      <ng-content></ng-content>
    </div>
  </div>
  `,
        preserveWhitespaces: false,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [`
    .raised-wrap {
      position: relative;
      display: inline-block;
    }
    .raised-bg {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
    .raised-content {
      position: relative;
    }
    .zDepth-0 {
      box-shadow: none;
    }
    .zDepth-1 {
      box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
    }
    .zDepth-2 {
      box-shadow: 0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2);
    }
    .zDepth-3 {
      box-shadow: 0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24);
    }
    .zDepth-4 {
      box-shadow: 0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22);
    }
    .zDepth-5 {
      box-shadow: 0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2);
    }
  `]
    })
], RaisedComponent);
export { RaisedComponent };
let RaisedModule = class RaisedModule {
};
RaisedModule = tslib_1.__decorate([
    NgModule({
        declarations: [RaisedComponent],
        exports: [RaisedComponent],
        imports: [CommonModule],
    })
], RaisedModule);
export { RaisedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFpc2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jb2xvci8iLCJzb3VyY2VzIjpbInJhaXNlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFpRHBGLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUEvQzVCO1FBZ0RXLFdBQU0sR0FBMkIsQ0FBQyxDQUFDO1FBQ25DLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxlQUFVLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7Q0FBQSxDQUFBO0FBSFU7SUFBUixLQUFLLEVBQUU7OytDQUFvQztBQUNuQztJQUFSLEtBQUssRUFBRTs7K0NBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTs7bURBQXFCO0FBSGxCLGVBQWU7SUEvQzNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRTs7Ozs7OztHQU9UO1FBbUNELG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBbkN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNSO0tBR0YsQ0FBQztHQUNXLGVBQWUsQ0FJM0I7U0FKWSxlQUFlO0FBVzVCLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7Q0FBSSxDQUFBO0FBQWhCLFlBQVk7SUFMeEIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUMxQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLFlBQVksQ0FBSTtTQUFoQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXJhaXNlZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwicmFpc2VkLXdyYXBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyYWlzZWQtYmcgekRlcHRoLXt7ekRlcHRofX1cIiBbc3R5bGUuYmFja2dyb3VuZF09XCJiYWNrZ3JvdW5kXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmFpc2VkLWNvbnRlbnRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAucmFpc2VkLXdyYXAge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5yYWlzZWQtYmcge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnJhaXNlZC1jb250ZW50IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnpEZXB0aC0wIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICAgIC56RGVwdGgtMSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMTIpLCAwIDJweCA1cHggcmdiYSgwLDAsMCwuMTYpO1xyXG4gICAgfVxyXG4gICAgLnpEZXB0aC0yIHtcclxuICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsMCwwLC4xOSksIDAgOHB4IDE3cHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICB9XHJcbiAgICAuekRlcHRoLTMge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDE3cHggNTBweCByZ2JhKDAsMCwwLC4xOSksIDAgMTJweCAxNXB4IHJnYmEoMCwwLDAsLjI0KTtcclxuICAgIH1cclxuICAgIC56RGVwdGgtNCB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMjVweCA1NXB4IHJnYmEoMCwwLDAsLjIxKSwgMCAxNnB4IDI4cHggcmdiYSgwLDAsMCwuMjIpO1xyXG4gICAgfVxyXG4gICAgLnpEZXB0aC01IHtcclxuICAgICAgYm94LXNoYWRvdzogMCA0MHB4IDc3cHggcmdiYSgwLDAsMCwuMjIpLCAwIDI3cHggMjRweCByZ2JhKDAsMCwwLC4yKTtcclxuICAgIH1cclxuICBgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhaXNlZENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgekRlcHRoOiAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgID0gMTtcclxuICBASW5wdXQoKSByYWRpdXMgPSAxO1xyXG4gIEBJbnB1dCgpIGJhY2tncm91bmQgPSAnI2ZmZic7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbUmFpc2VkQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUmFpc2VkQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhaXNlZE1vZHVsZSB7IH1cclxuIl19