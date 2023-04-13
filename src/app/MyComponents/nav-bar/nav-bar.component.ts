import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { ContactsService } from 'src/app/Service/contacts.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
constructor(private service:ContactsService){}
  ngOnInit(): void { 
}
enteredSearchValue: string ='' ;

@Output()
searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

onSearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSearchValue); 
}
logout(){
  alert("Log out")
  this.service.sigOut();
}
}
