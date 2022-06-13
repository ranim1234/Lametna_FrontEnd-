import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
{path: 'calendar', component: CalendarComponent},
{path: 'notes', component: NotesComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
