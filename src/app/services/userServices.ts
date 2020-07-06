import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { postServ } from './post.service';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
    })

    
    export class UserResolverService implements Resolve<any> {
      constructor(private ps: postServ, private route: ActivatedRoute) { }

     
      // id:any= this.route.snapshot.paramMap.get('id');


      resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.ps.geteachpost(route.params['id']).pipe(
          catchError((error) => {
          return empty();
          })
        );
      }
    }