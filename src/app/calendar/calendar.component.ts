import { Component, OnInit } from '@angular/core';
import { DragEventArgs, EventSettingsModel, ResizeEventArgs, View } from '@syncfusion/ej2-angular-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data'; 
import { L10n} from  '@syncfusion/ej2-base'; 

L10n.load({ 
    'en-US': { 
        'schedule': {
         'saveButton':'add' ,
         'cancelButton': 'Close',
         'deleteButton': 'Remove',
         'newEvent': 'Lametna',
         'editEvent':'Edit',
         'deleteEvent':'Delete',




        }

    }



}); 
@Component({
  selector: 'app-calendar',
  template: `<ejs-schedule height="600" width="1250" style="background-color:#fc9c71;right=0px" [eventSettings]="eventObject" [selectedDate]="setDate" [currentView]="setView" >  
  <ng-template #eventSettingsTemplate let-data>
  <div class='template-wrapper' style="color:#EBACA2;font-weight:bold; " >{{data.Subject}}</div></ng-template>
  <ng-template #editorTemplate let-data>
  <table *ngIf="data != undefined" class="custom-event-editor" width="100%" cellpadding="5">
      <tbody>
          <tr>
              <td class="e-textlabel">Subject</td>
              <td colspan="4">
                  <input id="Subject" class="e-field e-input" type="text" value="{{data.Subject}}"
                      name="Subject" style="width: 100%" />
              </td>
          </tr>
          <tr>
              <td class="e-textlabel">Status</td>
              <td colspan="4">
                  <ejs-dropdownlist id='Status' class="e-field" data-name="Status" placeholder='Choose Status'
                      [dataSource]='StatusData' [fields]='statusFields' value='{{data.Status}}'>
                  </ejs-dropdownlist>
              </td>
          </tr>
          <tr>
              <td class="e-textlabel">From</td>
              <td colspan="4">
                  <ejs-datetimepicker id="StartTime" class="e-field" data-name="StartTime"
                      format="M/dd/yy h:mm a" [value]="dateParser(data.startTime || data.StartTime)">
                  </ejs-datetimepicker>
              </td>
          </tr>
          <tr>
              <td class="e-textlabel">To</td>
              <td colspan="4">
                  <ejs-datetimepicker id="EndTime" class="e-field" data-name="EndTime" format="M/dd/yy h:mm a"
                      [value]='dateParser(data.endTime || data.EndTime)'></ejs-datetimepicker>
              </td>
          </tr>
          <tr>
              <td class="e-textlabel">My Question</td>
              <td colspan="4">
                  <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50"
                      value="{{data.Description}}"
                      style="width: 100%; height: 60px !important; resize: vertical"></textarea>
              </td>
          </tr>
      </tbody>
  </table>
</ng-template> 

<ng-template #cellTemplate let-data>
<div class="templatewrap" [innerHTML]="getCellContent(data.date)"></div>
</ng-template>
 
<e-views>
<e-view option="Month"></e-view>
</e-views>



  
  
  </ejs-schedule>`,
  //templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']

})

export class CalendarComponent  { 
  title = 'my-scheduler-app';  
  public dateParser(date: string)
  { 
    return new Date(date);


           }
  public statusFields: Object = { text: 'StatusText', Value: 'StatusText'   };
  public StatusData: Object[] = [
    { StatusText: 'New'},
    { StatusText: 'Requested'},
    { StatusText: 'Confirmed'}                                    



    ];
  public setView: View = 'Week';
  public setDate: Date = new Date(2021,5,9); 
 
  public eventObject: EventSettingsModel = { 
     dataSource: [{
       Id: 1,
  Subject:"Art",
  StartTime: new Date(2021,5,9,4,0),
  EndTime: new Date(2021,5,9,4,15),



}],






  }
  getCellContent(date: Date): string {
     if (date.getMonth() === 5 && date.getDate() === 24) {
        return '<i class="fa fa-glass" aria-hidden="true"></i> <div class="caption"><b><FONT color="purple">Party Time</FONT></b></div>';
    
    } else if (date.getMonth() === 5 && date.getDate() === 22) {
        return '<i class="fa fa-birthday-cake" aria-hidden="true"></i> <div class="caption"><b><FONT color="purple">Happy birthday</FONT></b></div>';
    } 
    

    
    return '';
}



}


