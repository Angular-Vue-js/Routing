import { Pipe, PipeTransform } from '@angular/core';
import { Component } from '@angular/core';
@Pipe({ name: 'datePipe' })

@Component({
    // Selector uses lower case with hyphens.
    selector: 'datePipe',
    template: 
    `
    {{ mydate | date: 'MMMM d, y' }}
    
    `,
})

export class DatePipe {
    mydate = new Date(); 
}
