import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lists=[];

  constructor(private dbSer: DatabaseService) { }

  ngOnInit() {

    this.dbSer.getDB()
    .subscribe((data)=>this.lists=data);
    
  }  

}
