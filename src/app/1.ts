import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycalendar',
  templateUrl: './mycalendar.component.html',
  styleUrls: ['./mycalendar.component.css']
  
})

export class MycalendarComponent implements OnInit {

  todayDate:Date;
  showMonth:string;
  weekDays:any[];
  allMonths:any[];
  showYear:number;
  monthNum:number;
     
  constructor() { }

  ngOnInit() {

    this.todayDate = new Date();
    // Get current month
    this.allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.showMonth = this.allMonths[this.todayDate.getMonth()];
    
    // Get current year
    this.showYear = this.todayDate.getUTCFullYear();

    // Get week days
    this.weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
    
    this.monthNum = this.todayDate.getMonth();
    var monthValue = new Date(this.showYear, this.monthNum+1, 0).getDate();
    
    //var monthObj = {};
    for(var i=1;i<monthValue+1;i++) {
      var d = new Date(this.showYear,this.monthNum,i);         
      //monthObj[i] = this.weekDays[d.getDay()];
      console.log(i,this.weekDays[d.getDay()]);
    }

    //console.log(monthObj);
    
  }

}
