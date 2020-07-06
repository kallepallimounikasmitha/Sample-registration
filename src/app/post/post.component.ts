import { Component, OnInit } from '@angular/core';
import { postServ } from '../services/post.service';
import { postdetails } from '../models/postdetails.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';




@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private ps: postServ, private route: ActivatedRoute,
    private router: Router) { }

  po: postdetails[] = [];
  poi: postdetails;
  pos: postdetails;
  id: any;
  showDetails: postdetails;

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    // this.getpo();
    this.route.data.subscribe((data: { users: any }) => {
      this.pos = data.users;
      // return this.pos;
      console.log(this.pos);
    });

  }

  // getpo() {
  //   this.ps.getAllPosts().subscribe((data: postdetails[]) => {
  //     this.po = data;
  //     console.log(this.po);
  //   });
  // }
  // geteachpo() {
  //   this.ps.geteachpost(this.id).subscribe((datas: postdetails) => {
  //     this.pos = datas;
  //     // return this.pos;
  //     console.log(this.pos);
  //   });

  // }








}
