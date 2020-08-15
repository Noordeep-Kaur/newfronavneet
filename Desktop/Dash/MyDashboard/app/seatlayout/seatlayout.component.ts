import { Component, OnInit } from '@angular/core';
import {Seat} from '../models/seat';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-seatlayout',
  templateUrl: './seatlayout.component.html',
  styleUrls: ['./seatlayout.component.css']
})
export class SeatlayoutComponent implements OnInit {
  busId:string;
  showSeatList:Seat[]=[];
  fillupSeat=[];
  alert=false;
  toggle = true;
  subscription:Subscription;
  //status = 'Enable';
  constructor() { 
    this.busId="12";
  }

  getbookSeat()
  {
    console.log(this.busId);
   // this.subscription=this.BusService.
  }

//   status: boolean = false;
// clickEvent(){
// this.status = !this.status;
// }
//   enableDisableRule(e) {
//     this.toggle = !this.toggle;
Seat(e)
{
  // let seats=[];
  // seats=this.showSeatList.map(item=>{
  //   return item.seatNo
  // })
   let id=document.getElementById(e);

  // if((this.fillupSeat.indexOf(String(e))<0)&&(seats.indexOf(e)<0))
  // {
  //   if(this.showSeatList.length!=4)
  //   {
      id.innerHTML=`<img src="../assets/images/fseat.png" alt="">`

      let seat={
        seatNo:e
      }
  //     this.showList(seat);
  //   }
  //   else{
  //     this.alert=true;
  //   }
  // }
}
showList(seat)
{
  this.showSeatList.push(seat);
}

    
    // enableDisableRule1(e)
    // {
    //   this.toggle = !this.toggle;
    // }
   // this.status = this.toggle ? 'Enable' : 'Disable';
   ngOnInit(): void {
     this.getbookSeat();
  }
}

  

 


