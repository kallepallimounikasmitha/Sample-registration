import { Component, OnInit } from '@angular/core';
import { comServ } from '../services/comment.service';
import { commentdetails } from '../models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  constructor(private ps: comServ ) { }
  comment: commentdetails[] = [];
  com: commentdetails;
  comm : commentdetails;
  
  ngOnInit(): void {
    this.getpo();
    this.geteachpo();
    this.getpost();
  }

  getpo(){
    this.ps.getAllcoms().subscribe((data : commentdetails[]) => {
      this.comment = data;
      console.log(this.comment);
    });
  }
  geteachpo(){
    this.ps.geteachcom(1).subscribe((datas : commentdetails) => {
      this.com = datas;
      console.log(this.com);
    });

  }

  getpost(){
    this.ps.postmeth().subscribe((datasr : commentdetails) => {
      this.comm.id = datasr.id;
    });
  }
 

 
  

  
  


}
