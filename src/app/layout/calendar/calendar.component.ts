import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CalendarComponent as NgCalendarComponent} from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [routerTransition()]
})
export class CalendarComponent implements OnInit {
	calendarOptions: Options;
	@ViewChild(NgCalendarComponent) ucCalendar: NgCalendarComponent;
	constructor() { }

	ngOnInit() {
		this.calendarOptions = {
		height: "auto",
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        }
      };
	}

}
