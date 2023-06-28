import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  dropdownValues: string[]=[];
  textbox1: string='';
  textbox2: string='';
  textbox3: string='';

  constructor(private demosearch:DemoServiceService,private router:Router){
    this.getDropdownValues();
  }
  getDropdownValues(): void {
    this.demosearch.getDropdownValues().subscribe(
      (values: string[]) => {
        this.dropdownValues = values;
      },
      (error: any) => {
        console.log('Error fetching dropdown values:', error);
      }
    );}

}
