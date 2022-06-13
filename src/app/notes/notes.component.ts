import { Component, OnInit } from '@angular/core'; 
import { Renderer2, ViewChild, ElementRef } from '@angular/core';

import {  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent implements OnInit {
  @ViewChild("div", { read: ElementRef })
  private div!: ElementRef;
 

  

  constructor (private renderer: Renderer2){

  }
  ngOnInit(): void {
  } 

  add() {
    

 
 
    let el=document.getElementById("a");
    let elem=document.getElementById("b");
    let d=elem?.cloneNode(true); 

   

      /*el?.append(section);
      section?.append(textarea);
          section?.append(d);*/

   
   
   
    //append text to li element


    
    
    //Now append the li tag to divMessages div
    this.renderer.insertBefore(this.div.nativeElement, d, this.div.nativeElement.firstchild); 
  }
   
  
}





