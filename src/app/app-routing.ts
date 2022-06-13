import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { NotesComponent } from './notes/notes.component';



const routes: Routes = [
    {path: 'calendar', component: CalendarComponent},
    {path: 'notes', component: NotesComponent}
    
    
    
    ]; 
  export  const ROUTING = RouterModule.forRoot(routes);
    