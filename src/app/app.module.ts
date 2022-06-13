import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService  } from '@syncfusion/ej2-angular-schedule';
import { NotesComponent } from './notes/notes.component';
import { FormsModule } from '@angular/forms';
import{ DropDownListModule} from '@syncfusion/ej2-angular-dropdowns' ;
import {DateTimePickerModule} from '@syncfusion/ej2-angular-calendars'; 
import { ROUTING } from './app-routing';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CalendarComponent,
    NotesComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule,
    FormsModule,
    DropDownListModule,
    DateTimePickerModule,
    ROUTING
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService],

  bootstrap: [AppComponent]
})
export class AppModule { }
