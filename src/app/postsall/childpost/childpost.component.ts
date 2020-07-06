import { Component, OnInit, Input } from '@angular/core';
import { postdetails } from 'src/app/models/postdetails.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-childpost',
  templateUrl: './childpost.component.html',
  styleUrls: ['./childpost.component.css']
})
export class ChildpostComponent implements OnInit {

  constructor(private route: Router ) { }
  @Input() comingdata: postdetails;
  pid ="";
  id="";
  title = "";
  body = "";
  userId= "";
  fName="";
  mName="";
  lName="";
  mail = "";
  githubId="";
  linkedId="";






  ngOnInit(): void {
    this.pid= localStorage.getItem('k1');
    this.title= localStorage.getItem('k2');
    this.body= localStorage.getItem('k3');
    this.userId= localStorage.getItem('k4');
    this.fName= localStorage.getItem('k5');
    this.mName= localStorage.getItem('k6');
    this.lName= localStorage.getItem('k7');
    this.mail= localStorage.getItem('k8');
    this.githubId= localStorage.getItem('k9');
    this.linkedId= localStorage.getItem('k10');
    this.id= localStorage.getItem('k11');

  
  }
  showDetails(){
   
    this.route.navigate(["/posts/"+this.id]);
     

   }

}
