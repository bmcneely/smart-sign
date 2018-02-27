import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { PageHeaderModule } from '../../shared';

import { FullCalendarModule } from 'ng-fullcalendar';

@NgModule({
    imports: [CommonModule, CalendarRoutingModule, PageHeaderModule, FullCalendarModule],
    declarations: [CalendarComponent]
})
export class CalendarModule {}
