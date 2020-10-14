import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  listStr: any;  
  listHtml: any;
  lists=[];  

  constructor(private compSer: CompanyService, private dbSer: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  fun(x){
    //console.log(x);
    this.lists=[];

    this.compSer.getList(x)
    .subscribe(data=>{
      this.listStr=data;
      console.log(this.listStr);
          
      var parser = new DOMParser();
      this.listHtml = parser.parseFromString(data, 'text/html').body.innerText;
      this.listHtml = this.listHtml.split("\n");
      for(var i=0;i<this.listHtml.length;i++)
      {
        this.listHtml[i]=this.listHtml[i].trim();
        if(this.listHtml[i]!=="")
        this.lists.push(this.listHtml[i]);
        
      }
	    //console.log(this.lists);      
    });
    
  }

  saved(x){
    this.dbSer.savetoDB(x)
    .subscribe((data)=>{
      console.log(data);      
    });   
     this.router.navigate(['/home']);
  }
}
