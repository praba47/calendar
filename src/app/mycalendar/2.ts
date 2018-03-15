import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycalendar',
  templateUrl: './mycalendar.component.html',
  styleUrls: ['./mycalendar.component.css']
  
})

export class MycalendarComponent implements OnInit {

  curDate:Date;
  curMonth:number;
  curYear:number;
  fDate:number;
  lDate:number;
  fdayStart:number;
  dy:Date;
  tdyDate:Date;
  dayName:number;
  showMonth:string;
  showYear:number;
  weekDays:any[];
  allMonths:any[];
  monthNum:number;
     
  constructor() { }

  ngOnInit() {

    this.curDate = new Date();
    this.curMonth = this.curDate.getMonth();
    this.curYear = this.curDate.getFullYear();

    //console.log(this.curDate);
    //console.log(this.curMonth);
    //console.log(this.curYear);

    // get first day of present month
    this.curDate = new Date(this.curYear, this.curMonth, 1);    
    this.fDate = this.curDate.getDate();
    this.fdayStart = this.curDate.getDay();
    console.log("First Date " + this.fdayStart);

    // get last day of present month 
    this.curDate.setMonth(this.curMonth+1, 0)    
    this.lDate = this.curDate.getDate();
    //console.log("Last Date " + this.lDate);

    this.allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.showYear = this.curDate.getUTCFullYear();
    this.showMonth = this.allMonths[this.curDate.getMonth()];
    this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed','Thu', 'Fri', 'Sat'];
     this.dy = new Date();

    this.dayName = this.weekDays[this.dy.getDay()];
    console.log(this.dayName);

    // this.tdyDate  = new Date();
    // var month = this.tdyDate.getMonth();
    // var year = date.getFullYear();
    // var g = new Date(year,month, 1);   
    // var date = new Date();
    // var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    // var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    // var fdate = date.getDate();

    // this.dayName = this.weekDays[firstDay.getDay()];
    // console.log(this.dayName);
    // console.log(this.fdayStart);    
    // console.log(this.lDate);

    //var dn = dt.getDay();
    var dy = 1;

    for(var i=0;i<=41;i++){  
     console.log(i);

     if((i%7)==0){document.write("</div><div class='week-row'>");} 

     if((i>= this.fdayStart) && (dy<= this.lDate)){

      document.write("<div class='w_clm col'>"+ dy +"</div>");
      dy=dy+1;

     } else {document.write("<div class='w_clm col'></div>");}

    }

    
  //   // Get current month
  //   this.allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  //   this.showMonth = this.allMonths[this.todayDate.getMonth()];
    
  //   // Get current year
  //   this.showYear = this.todayDate.getUTCFullYear();

  //   // Get week days
  //   this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed','Thu', 'Fri', 'Sat'];
    
  //   this.monthNum = this.todayDate.getMonth();
  //   //var monthValue = new Date(this.showYear, this.monthNum+1, 0).getDate();
  //   this.todayDate = new Date(this.showYear, this.monthNum+1, 0);

  //   console.log(this.todayDate)
    
  //   var dy = 1;
  //   var first_day = this.todayDate.getDay(); 

  //   //console.log(first_day);

  //   var last_day=this.todayDate.getDate(); // Last date of present month
  //   console.log(last_day);


  //   document.write ("<table><tr><td>" + this.weekDays[0]  + "</td><td>" + this.weekDays[1]  + "</td><td>" + this.weekDays[2]  + "</td><td>" + this.weekDays[3]  + "</td><td>" + this.weekDays[4]  + "</td><td>" + this.weekDays[5]  + "</td><td>" + this.weekDays[6]  + "</td>");
    
  //   //var monthObj = {};
  //   for(var i=0;i<=41;i++){
  //     //console.log(i);
  //     if((i%7)==0){document.write("</tr><tr>");} 

  //     if (( i >= first_day ) && (dy <=  last_day)) {
  //        console.log(i);
  //        document.write("<td>"+ dy +"</td>");
  //        dy=dy+1;
  //     } else {document.write("<td></td>");}

  //     //console.log(i%7);
  //     //var d = new Date(this.showYear,this.monthNum,i);  
  //     //monthObj[i] = this.weekDays[d.getDay()];
  //     //console.log(i,this.weekDays[d.getDay()]);
  //   }

  //   document.write("</tr></table>")
  //   //console.log(monthObj);   
  // }

}
}
