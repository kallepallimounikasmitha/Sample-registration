import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { CommentComponent } from '../comment/comment.component';
//import { PostDetails } from '../models';

@Injectable({
    providedIn  : 'root'
})

export class comServ{
    constructor(private http: HttpClient){
       

    }
    getAllcoms(){
        return this.http.get("https://jsonplaceholder.typicode.com/comments");
   }
   geteachcom(id: number){
      return this.http.get("https://jsonplaceholder.typicode.com/comments/" + id);
   }

   postmeth(){
      return this.http.post("https://jsonplaceholder.typicode.com/comments", this);
   }

}