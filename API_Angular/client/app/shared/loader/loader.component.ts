import { Component, Input } from '@angular/core';

@Component({
    selector: 'loader',
    template: '<sk-chasing-dots [color]="_color" [isRunning]="_isRunning" [delay]="_delay"></sk-chasing-dots>'
})
export class LoaderComponent {
    private _color: string = 'red';
    private _isRunning: boolean = true;
    private _delay = 0;

    @Input() set color(color) {
        this._color = color;
    }

    @Input() set isRunning(isRunning) {
        this._isRunning = isRunning;
    }

    @Input() set delay(delay) {
        this._delay = delay;
    }

}