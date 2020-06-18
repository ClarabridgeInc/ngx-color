import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
export declare class CoordinatesDirective implements OnInit, OnDestroy {
    private el;
    private renderer;
    coordinatesChange: Subject<{
        x: number;
        y: number;
        top: number;
        left: number;
        containerWidth: number;
        containerHeight: number;
        $event: any;
    }>;
    private mousechange;
    private sub;
    mousedown($event: Event, x: number, y: number, isTouch?: boolean): void;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    handleChange(x: number, y: number, $event: Event, isTouch: boolean): void;
}
export declare class CoordinatesModule {
}
