import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { PostDetails } from '../models';

@Injectable({
    providedIn: 'root'
})

export class postServ {
    constructor(private http: HttpClient) {


    }
    getAllPosts() {
        return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }
    geteachpost(id: number): Observable<any> {
        return this.http.get("https://jsonplaceholder.typicode.com/posts/?id=" + id);
    }

    postmeth(posting) {
        return this.http.post("https://jsonplaceholder.typicode.com/posts", posting);
    }

}