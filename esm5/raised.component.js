import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
var RaisedComponent = /** @class */ (function () {
    function RaisedComponent() {
        this.zDepth = 1;
        this.radius = 1;
        this.background = '#fff';
    }
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
            template: "\n  <div class=\"raised-wrap\">\n    <div class=\"raised-bg zDepth-{{zDepth}}\" [style.background]=\"background\"></div>\n    <div class=\"raised-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  ",
            preserveWhitespaces: false,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["\n    .raised-wrap {\n      position: relative;\n      display: inline-block;\n    }\n    .raised-bg {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n    }\n    .raised-content {\n      position: relative;\n    }\n    .zDepth-0 {\n      box-shadow: none;\n    }\n    .zDepth-1 {\n      box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n    }\n    .zDepth-2 {\n      box-shadow: 0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2);\n    }\n    .zDepth-3 {\n      box-shadow: 0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24);\n    }\n    .zDepth-4 {\n      box-shadow: 0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22);\n    }\n    .zDepth-5 {\n      box-shadow: 0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2);\n    }\n  "]
        })
    ], RaisedComponent);
    return RaisedComponent;
}());
export { RaisedComponent };
var RaisedModule = /** @class */ (function () {
    function RaisedModule() {
    }
    RaisedModule = tslib_1.__decorate([
        NgModule({
            declarations: [RaisedComponent],
            exports: [RaisedComponent],
            imports: [CommonModule],
        })
    ], RaisedModule);
    return RaisedModule;
}());
export { RaisedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFpc2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jb2xvci8iLCJzb3VyY2VzIjpbInJhaXNlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFpRHBGO0lBL0NBO1FBZ0RXLFdBQU0sR0FBMkIsQ0FBQyxDQUFDO1FBQ25DLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxlQUFVLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFIVTtRQUFSLEtBQUssRUFBRTs7bURBQW9DO0lBQ25DO1FBQVIsS0FBSyxFQUFFOzttREFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFOzt1REFBcUI7SUFIbEIsZUFBZTtRQS9DM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLHlOQU9UO1lBbUNELG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07cUJBbkN0QyxvekJBaUNSO1NBR0YsQ0FBQztPQUNXLGVBQWUsQ0FJM0I7SUFBRCxzQkFBQztDQUFBLEFBSkQsSUFJQztTQUpZLGVBQWU7QUFXNUI7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFMeEIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO1lBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUMxQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDeEIsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1yYWlzZWQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInJhaXNlZC13cmFwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmFpc2VkLWJnIHpEZXB0aC17e3pEZXB0aH19XCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFja2dyb3VuZFwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJhaXNlZC1jb250ZW50XCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgLnJhaXNlZC13cmFwIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAucmFpc2VkLWJnIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5yYWlzZWQtY29udGVudCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC56RGVwdGgtMCB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuekRlcHRoLTEge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsLjEyKSwgMCAycHggNXB4IHJnYmEoMCwwLDAsLjE2KTtcclxuICAgIH1cclxuICAgIC56RGVwdGgtMiB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLDAsMCwuMTkpLCAwIDhweCAxN3B4IHJnYmEoMCwwLDAsLjIpO1xyXG4gICAgfVxyXG4gICAgLnpEZXB0aC0zIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAxN3B4IDUwcHggcmdiYSgwLDAsMCwuMTkpLCAwIDEycHggMTVweCByZ2JhKDAsMCwwLC4yNCk7XHJcbiAgICB9XHJcbiAgICAuekRlcHRoLTQge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDI1cHggNTVweCByZ2JhKDAsMCwwLC4yMSksIDAgMTZweCAyOHB4IHJnYmEoMCwwLDAsLjIyKTtcclxuICAgIH1cclxuICAgIC56RGVwdGgtNSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNDBweCA3N3B4IHJnYmEoMCwwLDAsLjIyKSwgMCAyN3B4IDI0cHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICB9XHJcbiAgYF0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWlzZWRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHpEZXB0aDogMCB8IDEgfCAyIHwgMyB8IDQgfCA1ICA9IDE7XHJcbiAgQElucHV0KCkgcmFkaXVzID0gMTtcclxuICBASW5wdXQoKSBiYWNrZ3JvdW5kID0gJyNmZmYnO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1JhaXNlZENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1JhaXNlZENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWlzZWRNb2R1bGUgeyB9XHJcbiJdfQ==