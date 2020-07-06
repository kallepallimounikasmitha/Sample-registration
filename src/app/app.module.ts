import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms' 
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { PostchildComponent } from './postchild/postchild.component';
import { ChildpostsComponent } from './allposts/childposts/childposts.component';
import { ChildpComponent } from './allpost/childp/childp.component';
import { PostsallComponent } from './postsall/postsall.component';
import { ChildpostComponent } from './postsall/childpost/childpost.component';
import { UserResolverService } from './services/userServices';



const appRoutes: Routes= [
 {
    path : 'posts',
    component : PostComponent
 },
 {
  path : 'posts/:id',
  component : PostComponent, resolve: { users: UserResolverService }
},
{
  path: 'childpost',
  component : ChildpostComponent
},
  {
    path : 'postsall',
    component : PostsallComponent
  },
  {
    path: 'practice',
    loadChildren: () => import('./practicemodule/practicemodule.module').then(m => m.PracticemoduleModule)
  },

  {
    path:'', redirectTo:"/postsall", pathMatch: 'full' 
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    PostchildComponent,
    ChildpostsComponent,
    ChildpComponent,
    PostsallComponent,
    ChildpostComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
