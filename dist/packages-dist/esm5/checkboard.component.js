import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { getCheckerboard } from './helpers/checkboard';
var CheckboardComponent = /** @class */ (function () {
    function CheckboardComponent() {
        this.white = 'transparent';
        this.size = 8;
        this.grey = 'rgba(0,0,0,.08)';
    }
    CheckboardComponent.prototype.ngOnInit = function () {
        var background = getCheckerboard(this.white, this.grey, this.size);
        this.gridStyles = {
            borderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            background: "url(" + background + ") center left",
        };
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
            template: "<div class=\"grid\" [ngStyle]=\"gridStyles\"></div>",
            preserveWhitespaces: false,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["\n  .grid {\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    position: absolute;\n  }\n  "]
        })
    ], CheckboardComponent);
    return CheckboardComponent;
}());
export { CheckboardComponent };
var CheckboardModule = /** @class */ (function () {
    function CheckboardModule() {
    }
    CheckboardModule = tslib_1.__decorate([
        NgModule({
            declarations: [CheckboardComponent],
            exports: [CheckboardComponent],
            imports: [CommonModule],
        })
    ], CheckboardModule);
    return CheckboardModule;
}());
export { CheckboardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29sb3IvIiwic291cmNlcyI6WyJjaGVja2JvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBbUJ2RDtJQWpCQTtRQWtCVyxVQUFLLEdBQUcsYUFBYSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFhcEMsQ0FBQztJQVJDLHNDQUFRLEdBQVI7UUFDRSxJQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsVUFBVSxFQUFFLFNBQU8sVUFBVSxrQkFBZTtTQUM3QyxDQUFDO0lBQ0osQ0FBQztJQWRRO1FBQVIsS0FBSyxFQUFFOztzREFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7O3FEQUFVO0lBQ1Q7UUFBUixLQUFLLEVBQUU7O3FEQUEwQjtJQUN6QjtRQUFSLEtBQUssRUFBRTs7MERBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFOzs2REFBc0I7SUFMbkIsbUJBQW1CO1FBakIvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxxREFBaUQ7WUFZM0QsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtxQkFYN0MsaUhBUUQ7U0FJRixDQUFDO09BQ1csbUJBQW1CLENBZ0IvQjtJQUFELDBCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FoQlksbUJBQW1CO0FBdUJoQztJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBTDVCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztTQUN4QixDQUFDO09BQ1csZ0JBQWdCLENBQUc7SUFBRCx1QkFBQztDQUFBLEFBQWhDLElBQWdDO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG4gIE9uSW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGdldENoZWNrZXJib2FyZCB9IGZyb20gJy4vaGVscGVycy9jaGVja2JvYXJkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3ItY2hlY2tib2FyZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZ3JpZFwiIFtuZ1N0eWxlXT1cImdyaWRTdHlsZXNcIj48L2Rpdj5gLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gIC5ncmlkIHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICBgLFxyXG4gIF0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB3aGl0ZSA9ICd0cmFuc3BhcmVudCc7XHJcbiAgQElucHV0KCkgc2l6ZSA9IDg7XHJcbiAgQElucHV0KCkgZ3JleSA9ICdyZ2JhKDAsMCwwLC4wOCknO1xyXG4gIEBJbnB1dCgpIGJveFNoYWRvdzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJvcmRlclJhZGl1czogc3RyaW5nO1xyXG4gIGdyaWRTdHlsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGdldENoZWNrZXJib2FyZCh0aGlzLndoaXRlLCB0aGlzLmdyZXksIHRoaXMuc2l6ZSk7XHJcbiAgICB0aGlzLmdyaWRTdHlsZXMgPSB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5ib3JkZXJSYWRpdXMsXHJcbiAgICAgIGJveFNoYWRvdzogdGhpcy5ib3hTaGFkb3csXHJcbiAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtiYWNrZ3JvdW5kfSkgY2VudGVyIGxlZnRgLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ2hlY2tib2FyZENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NoZWNrYm9hcmRDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib2FyZE1vZHVsZSB7fVxyXG4iXX0=