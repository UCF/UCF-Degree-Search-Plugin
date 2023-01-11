import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-result-count',
    templateUrl: './result-count.component.html',
    styleUrls: ['./result-count.component.scss']
})
export class ResultCountComponent {
    @Input() isLoading: any
    @Input() results: any
    @Input() params: any
    constructor () {}
}
