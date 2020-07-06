import { Component, OnInit } from '@angular/core';
import { postServ } from '../services/post.service';
import { postdetails } from '../models/postdetails.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postsall',
  templateUrl: './postsall.component.html',
  styleUrls: ['./postsall.component.css']
})
export class PostsallComponent implements OnInit {

  constructor(private ps: postServ, private route: Router)  {
    
   }


  po: postdetails[] = [];
  postDetails :postdetails;
  pos: postdetails;
  postingDataDetails: string[];  

title : string= "";
body : string= "";
uId: string = "";
fName : string= "";
Mname : string = "";
LName: string = "";
mail : string= "";
pNumber : string= "";
gitid : string= "";
linkedid: string="";
firstname : string= "";
id: string="";



  


  ngOnInit(): void {
    // this.getpo();
    // this.geteachpo();
   // this.createPost();
  }
  navigate(){
   // this.route.navigate(["/childpost"]);
  }

  getpo() {
    this.ps.getAllPosts().subscribe((data: postdetails[]) => {
      this.po = data;
      console.log(this.po);
    });
  }
  geteachpo() {
    this.ps.geteachpost(1).subscribe((datas: postdetails) => {
      this.pos = datas;
      console.log(this.pos);
    });

  }

  createPost() {
    this.ps.postmeth({
      title: this.title ,
      body: this.body,
      userId: this.uId
    }).subscribe((datasr: postdetails) => {
      this.postDetails = datasr;
        console.log(this.postDetails.id);
       localStorage.setItem('k1',datasr.id);
       localStorage.setItem('k2',datasr.title);
       localStorage.setItem('k3',datasr.body);
       localStorage.setItem('k4',datasr.userId);
       localStorage.setItem('k5',this.fName);
       localStorage.setItem('k6',this.Mname);
       localStorage.setItem('k7',this.LName);
       localStorage.setItem('k8',this.mail);
       localStorage.setItem('k9',this.gitid);       
       localStorage.setItem('k10',this.linkedid);
       localStorage.setItem('k11',this.id);




       setTimeout(() => {
        this.route.navigate(["/childpost"]);
         
       }, 1000);






       

        // console.log(this.postingData.length);
        // console.log(this.postingData[0].body);

      //  for(let i=0; i<100; i++){
        //  this.postingDataDetails[i] = this.postDetails[i].body;
       // }
        //console.log(this.postingDataDetails);
        
  
    });
  }


}
