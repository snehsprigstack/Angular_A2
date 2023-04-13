import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ContactsService } from 'src/app/Service/contacts.service';
import { Contacts } from 'src/Model/contact.model';
import { datePicker } from '../../../app/datepicker.js';
import flatpickr from 'flatpickr';
import * as $ from 'jquery'
import { FlatpickrOptions } from 'ng2-flatpickr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
 
  public Contacts: Contacts[] = [];
  p: any;
  p1: any;
  newList: any = [];
  displayStyle = "none";
  display = "none";
  displaydate = "none";
  borderbottom = "none";
  model: NgbDateStruct | undefined;
  time = { hour: 13, minute: 30 };
  selectedCar: number | undefined;
  selectedIcon: number | undefined;
  selectedManager: number | undefined;
  selectedDate: any
  padbot: any;

  open() {
    let x = <HTMLInputElement>document.getElementById("inlineRadio2");
    let y = <HTMLInputElement>document.getElementById("inlineRadio4");
    if (x.checked) {
      this.display = "block";
    } else {
      this.display = "none";
    }

    if (this.displaydate == "block" && y.checked) {
      this.borderbottom = "1px solid #15182140"
      this.padbot = "15px"
    }
  }
  opendate() {
    let x = <HTMLInputElement>document.getElementById("inlineRadio2");
    let y = <HTMLInputElement>document.getElementById("inlineRadio4");
    if (x.checked && !y.checked == false) {
      x.checked = false
    }
    if (y.checked) {
      this.displaydate = "block";
      this.display = "none"
    }
    else {
      this.displaydate = "none";
      this.borderbottom = "none"
      this.padbot = "0px"
    }

  }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    let x = <HTMLInputElement>document.getElementById("inlineRadio2");
    let y = <HTMLInputElement>document.getElementById("inlineRadio4");
    this.displayStyle = "none";
    this.display = "none"
    this.displaydate = "none"
    if (x.checked || y.checked) {
      x.checked = false
      y.checked = false
    }
  }
  cars = [
    { id: 1, name: 'Phone Call' },
    { id: 2, name: 'Billing' },
    { id: 3, name: 'C Test Subb' },
    { id: 4, name: 'Electronic Communication' },
    { id: 5, name: 'Email' },
    { id: 6, name: 'Event/Seminar' },
    { id: 7, name: 'face to face meeting' },
    { id: 8, name: 'General' },
    { id: 9, name: 'HandWritten' },
    { id: 10, name: 'NAIC Mak' },
    { id: 11, name: 'new testing' },
    { id: 12, name: 'Phone Call' },
    { id: 13, name: 'ReCreation' },
    { id: 13, name: 'Ron test1' },
    { id: 13, name: 'Sales' },
    { id: 13, name: 'Support' },
    { id: 13, name: 'test' },
    { id: 13, name: 'Test Sub7' },
    { id: 13, name: 'testing' },
    { id: 13, name: 'WebForm' },

  ];
  sortby = [
    { id: 1, name: 'By Priority' },
    { id: 1, name: 'By Due Date' },
    { id: 1, name: 'By Contact' }
  ]
  timezone = [
    { id: 1, name: 'EST/EDT (GMT -5/GMT-4)' },
    { id: 1, name: 'EST/EDT (GMT -6/GMT-5)' },
    { id: 1, name: 'EST/EDT (GMT -7/GMT-6)' }
  ]
  icon = [
    { id: 1, name: '01' },
    { id: 2, name: '02' },
    { id: 3, name: '03' },
    { id: 4, name: '04' },
    { id: 5, name: '05' },
    { id: 6, name: '06' },
    { id: 7, name: '07' },
    { id: 8, name: '08' },
  ];
  manager = [
    { id: 1, name: 'Florida Manager' },
    { id: 2, name: 'David L. Schwartz' },
    { id: 3, name: 'Henry E. Sandoval' },
    { id: 4, name: 'Charlotte C. Butler' },
    { id: 5, name: 'Rosetta J. Overman' },
    { id: 6, name: 'Cynthia W. Barrett' },
    { id: 7, name: 'Dale M. Warf' },
  ]
  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: true
  }
  constructor(private service: ContactsService, private config: NgSelectConfig) { }
  ngOnInit(): void {
    this.service.getAllProfile().subscribe((data: any) => {
      for (let i = 0; i < 50; i++) {
        this.newList.push(data[0])
        this.newList.push(data[1])
        this.newList.push(data[2])
      }
      this.Contacts = this.newList;
      console.log(this.newList)
      this.selectedCar = 1;
      this.selectedIcon = 2;
      this.selectedManager = 4;
      this.display = "none";
      this.displaydate = "none"
    });
  }

  public selectedMoment = new Date();
  searchText: string = '';
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText)
  }
  logout() {
    this.service.sigOut()
  }


}
